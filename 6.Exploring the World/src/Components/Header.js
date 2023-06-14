import logo from "../images/logo.png";
import { useState } from "react";

// Title component for display logo
const Title = () => {
    return( <a href="/">
         <img className="logo" src={logo} alt="Food Villa Logo" />
     </a>
    )
 }

 const NavItems = () => {
    // use useState for user logged in or logged out
    const [isLoggedin, setIsLoggedin] = useState(true);

    return(
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li>
                    {/* use conditional rendering for login and logout */}
                    {
                        isLoggedin ? (
                            <button 
                                className="logout-btn"
                                onClick={() => setIsLoggedin(false) }
                            >
                                LogOut
                            </button>
                        ) : (
                            <button
                                className="login-btn"
                                onClick={() => setIsLoggedin(true)}
                            >
                                LogIn
                            </button>
                        )
                    }
                </li>
            </ul>
        </div>
        
    )
}

// Header component for header section: Logo, Nav Items
const Header = () => {
    return(
        <div className="header">
            <Title />
            <NavItems />
        </div>
    )
}

export default Header;