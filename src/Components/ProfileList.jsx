import React, { useEffect, useState } from 'react';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your JSON server
    fetch('https://ccserver-obi1.onrender.com/creators')
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
              <p>{profile.bio}</p>
              {/*display more profile information here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileList;

  


