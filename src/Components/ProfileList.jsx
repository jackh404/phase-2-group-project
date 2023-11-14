import React, { useEffect, useState } from "react";
import icon from "../assets/img/icon.png";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const ProfileList = () => {
  const { user, projects, skills, creators } = useOutletContext();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your JSON server
    const dbserver = "https://ccserver-obi1.onrender.com/";
    fetch(`${dbserver}creators`)
      .then(response => response.json())
      .then(data => {
        setProfiles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleProfileClick = id => {
    // Navigate to the dynamic profile route
    navigate(`/profile/${id}`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {profiles.map(profile => {
            let skillsList;
            if (profile && profile.skills) {
              skillsList = profile.skills.map(skill => {
                return skills[skill];
              });
            }
            let projectList;
            if (profile && profile.projects) {
              console.log(profile.projects);
              projectList = projects.filter(project => {
                return profile.projects.includes(project.id);
              });
              console.log(projectList);
              projectList = projectList.map(project => project.name);
            }
            return (
              <div
                className="projectCard"
                key={profile.id}
                onClick={() => handleProfileClick(profile.id)}
              >
                <h2>{profile.name}</h2>
                <img src={icon} alt={"profile picture"} />
                <p>{profile.bio}</p>
                <p>Skills: {skillsList.join(", ")}</p>
                <p>Projects: {projectList.join(", ")}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProfileList;
