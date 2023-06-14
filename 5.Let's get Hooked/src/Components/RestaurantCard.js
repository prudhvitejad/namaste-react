import { IMG_CDN_URL } from "../../config"

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
}) => {
    return(
        <div className="card">
            <img src={ IMG_CDN_URL + cloudinaryImageId } />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{area}</h4>
            <span>
                <h4 style={
                    avgRating < 4 ? {backgroundColor:"red"} : {color:"white"}
                }>
                    <i class="fa-solid fa-star"></i>
                    {avgRating}
                </h4>
                <h4>{lastMileTravelString}</h4>
                <h4>{costForTwoString}</h4>
            </span>
        </div>
    )
}

export default RestaurantCard;