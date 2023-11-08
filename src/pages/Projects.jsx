import { useEffect, useState } from "react";
import Project from "../Components/Project"
import { NavLink } from "react-router-dom";
import Search from "../Components/Search";


function Projects({props}){
  // add projects that are looking for pianist or XY and all that


  // states
    const [projects,setProjects] = useState([])
    const[input,setInput] = useState("")
  // fetch the data here
    useEffect(() =>{
        fetch(`https://ccserver-obi1.onrender.com/projects`)
        .then(res => res.json())
        .then(data => setProjects(data))
        // .catch(error => console.error(error))
      }, []);
  // input handler handles user inputs with state
      function inputHandler(e){
        setInput(e.target.value)
      }
      let filteredProject = projects
      if(input.length !== 0){
        filteredProject = projects.filter(project=>{
          return project.name.toLowerCase().includes(input.toLowerCase())
        })
      }

  // mapping projects to the project list
      const project = filteredProject.map(project=>{
        return <Project  id = "projectsDiv" key = {project.id} project={project}/>
      })
      
      

    return <>
    <div>
        <h1>List of projecs</h1>
        <Search inputHandler = {inputHandler} input={input}/>
        
        <div id="project container div">
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