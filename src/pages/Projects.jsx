import { useEffect, useState } from "react";
import Project from "../Components/Project"
import { NavLink } from "react-router-dom";


function Projects({props}){
// add projects that are olooking for pianist or XY and all that

    const [projects,setProjects] = useState([])
    //fetch the data here?
    useEffect(() =>{
        fetch(`https://ccserver-obi1.onrender.com/projects`)
        .then(res => res.json())
        .then(data => setProjects(data))
        // .catch(error => console.error(error))
      }, []);

      const project = projects.map(project=>{
        return <Project key = {project.id} project={project}/>
      })
      

    return <>
    <div>
        <header>List of projecs go here</header>
        {project}
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