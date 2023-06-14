/*Food Villa
    Header
        - Logo
        - Nav Items(right side)
        - Cart
    Body
        - Search Bar
        - RestaurantList
            - RestaurantCard
                - Image
                - Name
                - Ratings
                - Cusines
    Footer
        - links
        - Copyright
*/

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
 
const AppLayout = () => {
    return(
        <>
            <Header />
            <Body />
            <Footer />
        </>    
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);