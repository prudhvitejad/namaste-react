import { restaurantList } from "../../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

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
    const [restaurants, setRestaurants] = useState(restaurantList);
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
                        const data = filterData(searchText,restaurants);
                        setRestaurants(data);
                    } } 
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                    })
                }
            </div>
        </> 
    )
}

export default Body;