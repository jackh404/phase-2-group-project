import { useOutletContext } from "react-router-dom";
import Project from "../Components/Project";
import LoginForm from "../Components/LoginForm";
import NewProjectForm from "../Components/NewProjectForm";
import { useState } from "react";

function Dashboard({}) {
  const { user, projects } = useOutletContext();
  const [showForm, setShowForm] = useState(false);
  // console.log(user)
  if (!user) {
    return (
      <>
        <h1>Please sign in to view this page.</h1>
        <LoginForm />;
      </>
    );
  }
  if (projects) {
    const projectsList = projects.filter(project =>
      project.creators.includes(user.id)
    );
    const displayProjects = projectsList.map(project => (
      <Project project={project} key={project.id} />
    ));
    return (
      <div>
        <h1>{user.name}'s Dashboard</h1>
        <h2>
          My Projects&emsp;
          <button
            style={{ fontSize: "medium" }}
            onClick={() => setShowForm(true)}
          >
            Add New
          </button>
          {showForm ? <NewProjectForm setShowForm={setShowForm} /> : ""}
        </h2>
        <div id="projectContainer">{displayProjects}</div>
      </div>
    );
  } else {
    return <img src="../src/assets/img/stefan-bonk.gif" />;
  }
}

export default Dashboard;
