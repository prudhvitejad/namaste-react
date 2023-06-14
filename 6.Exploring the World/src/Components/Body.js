import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../../config";

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
    const filterData = restaurants.filter( (restaurant) => 
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {

    //useState: To create a state variable, searchText is local state variable
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(() => {
        getRestaurants();
    },[]);

    // async function getRestaurants to fetch Swiggy API data
    async function getRestaurants() {
        // handle the error using try... catch
        try {
            const data = await fetch(SWIGGY_API_URL);
            const json = await data.json();
            
            // updated state variable restaurants with Swiggy API data
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        } catch(error) {
            console.log(error);
        }
    }

    // use searchData function and set condition if data is empty show error message
    const searchData = (searchText, restaurants) => {
        if(searchText !== "") {
            const data = filterData(searchText,restaurants);
            setFilteredRestaurants(data);
            setErrorMessage("");
            if(data.length === 0) {
                setErrorMessage("No Matches Found");
            }
        }
        else {
            setErrorMessage("");
            setFilteredRestaurants(restaurants);
        }
    }

    // if allRestaurants is empty don't render restaurants cards(Early return)
    if (!allRestaurants) return null;

    return(
        <>
            <div className="search-container">
                <input 
                    type="=text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={ (e) => {   setSearchText(e.target.value)}}
                    />
                <button 
                    className="search-btn"
                    onClick={ () => {
                        // user click on button searchData function is called
                        searchData(searchText, allRestaurants);
                    } } 
                >
                    Search
                </button>
            </div>

            { errorMessage && <div className="error-container"> { errorMessage } </div> }
            
            { /* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
            {
                allRestaurants?.length === 0 ? ( <Shimmer/> ) : (
                    <div className="restaurant-list">
                        { /* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */ }
                        {
                            filteredRestaurants.map( (restaurant) => {
                                return (
                                    <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                                )
                            })
                        }
                    </div>
                )
            }
        </> 
    )
}

export default Body;