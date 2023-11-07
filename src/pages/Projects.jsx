import { useEffect, useState } from "react";
import Project from "../Components/Project"
import { NavLink } from "react-router-dom";


function Projects({props}){
// add projects that are looking for pianist or XY and all that

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
        <h1>List of projecs</h1>
        <div id= "searchBarDiv">
            <h3>project search</h3>
            <input type = "text" placeholder = "Search Projects..."></input>
            
        </div>
        <div id = "projectsDiv">
            {project}
        </div>
       
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