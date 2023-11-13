import { useState } from "react";
import Project from "../Components/Project";
import { useOutletContext } from "react-router-dom";
import Search from "../Components/Search";
import ProjectFilter from "../Components/ProjectFilter";
import NewProjectForm from "../Components/NewProjectForm";


function Projects() {
  // states
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [right,setRight] = useState(0)
  
 // fk this sht is annoying and vague
 var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});


  // control the right and left click states
// let rightOne = right

  function clickRight(e){
  //   if(right<3){
  //   rightOne++
  //   setRight(rightOne)
  //   console.log(right)
  // }
  
  }
  function clickLeft(e){
    // if(right>0){
    //   rightOne--
    //   setRight(rightOne)
    //   console.log(right)
    // }
  }

  

  // fetch the data here
  const { user, projects, skills,creators } = useOutletContext();
  console.log(creators);
  if (!projects.length) {
    return <img src="../src/assets/img/stefan-bonk.gif" />;
  }

  // text filter handler
  function inputHandler(e) {
    setInput(e.target.value);
  }

  let filteredProject = projects;
  if (input.length !== 0) {
    filteredProject = projects.filter(project => {
      return project.name.toLowerCase().includes(input.toLowerCase());
    });
  }

  // select menu filter
  function selectHandler() {}
  let filteredSelect = filteredProject;

  // mapping projects to the project list
  const project = filteredProject.map(project => {
    return (
      <Project
        id="projectsDiv"
        key={project.id}
        project={project}
        skills={skills}
      />
    );
  });
  
  return (
    <>
      <div>
        {/* flick test */}
        <div>
        {/* <!-- Flickity HTML init --> */}
        <p><code>wrapAround: true</code></p>
        <div class="main-carousel" >
  <div class="carousel-cell">{project[0]}</div>
  <div class="carousel-cell">{project}</div>
  <div class="carousel-cell">{project}</div>
  <div class="carousel-cell">{project}</div>
  <div class="carousel-cell">{project}</div>
  <div class="carousel-cell">{project}</div>
  <div class="carousel-cell">{project}</div>
  <div class="carousel-cell">{project}</div>
</div>

        </div>
        {/* flick test */}


        <h1>List of projects</h1>
        {!showForm && user ? (
          <button id="rightButton" onClick={() => setShowForm(true)}>Add your own</button>
        ) : (
          ""
        )}
        {showForm ? <NewProjectForm setShowForm={setShowForm} /> : ""}
        <Search inputHandler={inputHandler} input={input} />
        <ProjectFilter />
        <br/>
        
        
        <br/>
      
      <br/>
      </div>
      
    </>
  );
}

export default Projects;
