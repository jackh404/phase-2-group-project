import Project from "./Project"
import { NavLink } from "react-router-dom";

function Projects({props}){

    //fetch the data here?

    return <>
    <div>
        <header>List of projecs go here</header>
        <Project/>
        <nav>
        <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
        </nav>

    </div>
    </>
}

export default Projects