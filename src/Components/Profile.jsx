import React from "react";
import { useParams } from "react-router-dom";

const Profile = ({ creators }) => {
  const { id } = useParams();

  // Find the creator with the matching id
  const profile = creators.find((creator) => creator.id === id);

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div className="profile">
      <h2>{profile.name}</h2>
      <img src={profile.image} alt={`${profile.name}'s profile picture`} />
      <p>{profile.bio}</p>
      <p>{profile.skills}</p>
      <p>{profile.projects}</p>
    </div>
  );
};

export default Profile;


