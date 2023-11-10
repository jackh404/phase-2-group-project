import { useEffect, useState } from "react";
import Project from "../Components/Project";
import { NavLink, useOutletContext } from "react-router-dom";
import Search from "../Components/Search";
import ProjectFilter from "../Components/ProjectFilter";
import NewProjectForm from "../Components/NewProjectForm";

function Projects() {
  // states
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState("All");
  const [showForm, setShowForm] = useState(false);
  // fetch the data here
  const { user, setUser, creators, projects, skills } = useOutletContext();

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
        <h1>List of projects</h1>
        {!showForm ? (
          <button onClick={() => setShowForm(true)}>Add your own</button>
        ) : (
          ""
        )}
        {showForm ? <NewProjectForm setShowForm={setShowForm} /> : ""}
        <Search inputHandler={inputHandler} input={input} />
        <ProjectFilter />

        <div id="project container div">{project}</div>

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
  );
}

export default Projects;
