import { useEffect, useState } from "react";
import Project from "../Components/Project"
import { NavLink } from "react-router-dom";
import Search from "../Components/Search";
import ProjectFilter from "../Components/ProjectFilter";
import NewProjectForm from "../Components/NewProjectForm";



function Projects({props}){
  // add projects that are looking for pianist or XY and all that


  // states
    const [projects,setProjects] = useState([])
    const[input,setInput] = useState("")
    const[selection,setSelection] = useState("All")
    const [skills,setSkills]=useState([])
  // fetch the data here
  
  
  useEffect(() =>{
      fetch(`https://ccserver-obi1.onrender.com/skills`)
      .then(res => res.json())
      .then(data => setSkills(data))
  // .catch(error => console.error(error))
    }, []);
    useEffect(() =>{
        fetch(`https://ccserver-obi1.onrender.com/projects`)
        .then(res => res.json())
        .then(data => setProjects(data))
  // .catch(error => console.error(error))
      }, []);
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
    

    <div>
        <h1>List of projecs</h1>
        <Search inputHandler = {inputHandler} input={input}/>
        <ProjectFilter/>
        <NewProjectForm skills={skills}/>
    </div>
        
    <div id="project container div">
            {project}
    </div>
       <img src="src/assets/img/anvil.png"></img>
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
    </nav>

    
    </>
}

export default Projects