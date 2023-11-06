import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user";

function NavBar () {
    const user = useContext(UserContext)
    if(user)
        return (
            <nav>
                <NavLink to="/" className="navLink">Home</NavLink>
                <NavLink to="/projects" className="navLink">Projects</NavLink>
                <NavLink to="/creators" className="navLink">Creators</NavLink>
                <NavLink to="/about" className="navLink">About</NavLink>
                <NavLink to={`/creator/${user.id}`} className="navLink rightNav">Profile</NavLink>
            </nav>
        )
    else
        return (
            <nav>
                <NavLink to="/" className="navLink">Home</NavLink>
                <NavLink to="/projects" className="navLink">Projects</NavLink>
                <NavLink to="/about" className="navLink">About</NavLink>
                <NavLink to="/login" className="navLink rightNav">Log In</NavLink>
            </nav>
    )
}

export default NavBar