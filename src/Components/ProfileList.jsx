import React, { useEffect, useState } from 'react';
import icon from '../assets/img/icon.png';

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
            <div key={profile.id}>
              <h2>{profile.name}</h2>
              <img src={icon} alt={"profile picture"}/>
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

  


