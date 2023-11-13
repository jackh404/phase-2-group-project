import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileT = () => {
  // Use the `useParams` hook to get the parameters from the route
  const { id } = useParams();

  // Fetch data for the specific creator based on the id

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Creator ID: {id}</p>
      {/* Render the profile details here */}
    </div>
  );
};

export default ProfileT;

