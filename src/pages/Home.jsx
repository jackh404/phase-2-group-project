import "../index.css";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import Project from "../Components/Project";
function Home() {
  const { user, projects } = useOutletContext();

  let featuredProject = { name: "Loading...", description: "Loading..." };
  if (projects.length > 0) {
    featuredProject = projects[Math.floor(Math.random() * projects.length)];
  }
  console.log(projects);
  let message;
  if (!user)
    message = (
      <h3>
        If you are an existing user, please <Link to="/login">Log In</Link>.
        Otherwise, feel free to check out our featured projects below or our{" "}
        <Link to="/about">About page</Link>.
      </h3>
    );
  else
    message = (
      <h3>Check out featured projects by your fellow creators below!</h3>
    );
  return (
    <div id="homePage">
      <div>
        <h1>Welcome {user ? `back, ${user.name}` : "to the AllForge!"}</h1>
        {message}
        <hr />
        <Project project={featuredProject} />
      </div>
    </div>
  );
}

export default Home;
