import React, { useEffect, useState } from 'react';
import icon from '../assets/img/icon.png';
import jackIcon from '../assets/img/jack-icon.png';
import shalIcon from '../assets/img/shal-icon.png';




const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your JSON server
     const dbserver = 'https://ccserver-obi1.onrender.com/';
    fetch(`${dbserver}creators`)
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {profiles.map((profile) => (
            <div className = "projectCard" key={profile.id}>
              <h2>{profile.name}</h2>
              <span>{  (profile.id ==="jack") ?
                  <img src={jackIcon} alt={"Jack's profile picture"}/>
                : ( (profile.id === "shal") ?
                  <img src={shalIcon} alt={"Shal's profile picture"}/>
                :
                  <img src={icon} alt={"profile picture"}/>)
              }</span>
              <p>{profile.bio}</p>
              <p>{profile.skills}</p>
              <p>{profile.projects}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileList;