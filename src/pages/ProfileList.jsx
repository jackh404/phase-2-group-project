import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { creators, skills } = useOutletContext();

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
            return (
              <div className="projectCard" key={profile.id}>
                <h2>{profile.name}</h2>
                <img
                  src={profile.img}
                  alt={`${profile.name}'s profile picture`}
                />
                <p>{profile.bio}</p>
                <p>Skills: {skillsList.join(", ")}</p>
                <p>Projects: {profile.projects.join(", ")}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProfileList;
