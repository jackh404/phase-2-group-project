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
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);
  const [isRightClicked, setRightClicked] = useState(false);
  const [xPos, setXPos] = useState(0);

  let movePos = xPos;
  let minMax = right;
  const handleRightClick = () => {
     if(right<(project.length-2)){
       minMax++
       setRight(minMax)
      setXPos(movePos-=400)
      setRightClicked(true);
      console.log(`xpos: ${minMax}`);
    }
  };
  const divStyle = {
    transform: isRightClicked ? `translate(${xPos}px, 0px)` : "none",
    transition: "transform 0.3s ease-in-out",
  };
  
  
  function clickLeft(e){
    if(right>0){
      minMax--
     setRight(minMax)
    setXPos(movePos+=400)
    setRightClicked(true);
    console.log(`xpos: ${minMax}`)
  }
  }
  // translating the class to move the inner div

  // fetch the data here
  const { user, projects, skills, setProjects } = useOutletContext();
  console.log(projects);
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
    return <Project id="projectsDiv" key={project.id} project={project} />;
  });

  return (
    <>
    <div id="shade">
      <div className="background">
        <h1>List of projects</h1>
        {!showForm && user ? (
          <button id="rightButton" onClick={() => setShowForm(true)}>
            Add your own
          </button>
        ) : (
          ""
        )}

        {showForm ? <NewProjectForm setShowForm={setShowForm} /> : ""}
        <Search inputHandler={inputHandler} input={input} />
        <ProjectFilter />
        
        <div id = "uContainer">
        <button className="arrowButton" onClick={e => {clickLeft(e);}}>🢀</button>
        <div id="scrollerDiv">
          <div id="projectContainer" className={isRightClicked ? 'rightClicked' : ''} style={divStyle} onContextMenu={handleRightClick}>
            {project}
          </div>
        </div>
        
      <button className="arrowButton" onClick={e => {handleRightClick(e)}}>🢂</button>
      
      </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
