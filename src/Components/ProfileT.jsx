import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import icon from '../assets/img/icon.png';



const ProfileT = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch data for the specific creator based on the id
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ccserver-obi1.onrender.com/creators/${id}`);
        const userData = await response.json();
        console.log('User Data:', userData);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div className="profile">
          <img src={user.img} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          {/* You may want to map through user.skills and user.projects if they are arrays */}
          <p>Skills: {user.skills && user.skills.join(', ')}</p>
          <p>Projects: {user.projects && user.projects.join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileT;
