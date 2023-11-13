import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import icon from "../assets/img/icon.png";
import Project from "./Project";

const ProfileT = () => {
  const { projects, skills } = useOutletContext();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch data for the specific creator based on the id
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ccserver-obi1.onrender.com/creators/${id}`
        );
        const userData = await response.json();
        console.log("User Data:", userData);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);
  let skillsList;
  if (user && user.skills) {
    skillsList = user.skills.map(skill => {
      return skills[skill];
    });
  }
  let projectCards = null;
  if (user && user.projects) {
    const projectList = projects.filter(project => {
      return user.projects.includes(project.id);
    });
    projectCards = projectList.map(project => {
      return <Project id="projectsDiv" key={project.id} project={project} />;
    });
  }
  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div className="profile">
          <img src={user.img} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          {/* You may want to map through user.skills and user.projects if they are arrays */}
          <p>Skills: {skillsList.join(", ")}</p>
          {projectCards}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileT;
