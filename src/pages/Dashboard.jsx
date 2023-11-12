import { useOutletContext } from "react-router-dom";
import Project from "../Components/Project";
import LoginForm from "../Components/LoginForm";

function Dashboard({}) {
  const { user, projects } = useOutletContext();
  if (projects && !user) {
    <LoginForm />;
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
          <button style={{ fontSize: "medium" }}>Add New</button>
        </h2>
        <div id="projectContainer">{displayProjects}</div>
      </div>
    );
  } else {
    return <img src="../src/assets/img/stefan-bonk.gif" />;
  }
}

export default Dashboard;
