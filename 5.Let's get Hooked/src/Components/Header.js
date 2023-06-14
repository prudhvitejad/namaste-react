import logo from "../images/logo.png";

// Title component for display logo
const Title = () => {
    return( <a href="/">
         <img className="logo" src={logo} alt="Food Villa Logo" />
     </a>
    )
 }

 const NavItems = () => {
    return(
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
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