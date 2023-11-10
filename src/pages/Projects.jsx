import { useEffect, useState } from "react";
import Project from "../Components/Project"
import { NavLink,useOutletContext } from "react-router-dom";
import Search from "../Components/Search";
import ProjectFilter from "../Components/ProjectFilter";
import NewProjectForm from "../Components/NewProjectForm";


function Projects({props}){
  // add projects that are looking for pianist or XY and all that
  

  // states
    const[input,setInput] = useState("")
    const[selection,setSelection] = useState("All")
    const [showForm,setShowForm] = useState(false)
  // fetch the data here
  const [user,setUser,creators,projects,skills] = useOutletContext()

  // text filter handler
      function inputHandler(e){
        setInput(e.target.value)
      }
      let filteredProject = projects
      if(input.length !== 0){
        filteredProject = projects.filter(project=>{
          return project.name.toLowerCase().includes(input.toLowerCase())
        })
      }
  // select menu filter
      function selectHandler(){
      }
      let filteredSelect = filteredProject

  // mapping projects to the project list
      const project = filteredProject.map(project=>{
        return <Project  id = "projectsDiv" key = {project.id} project={project} skills = {skills} />
      })
      
      

    return <>
    {showForm?<NewProjectForm />:''}
    <div>
        <h1>List of projects</h1>
        <Search inputHandler = {inputHandler} input={input}/>
        <ProjectFilter/>
        {showForm?<NewProjectForm />:''}
        
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