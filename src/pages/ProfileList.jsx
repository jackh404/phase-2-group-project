import React from "react";
import { Link } from "react-router-dom";

const ProfileList = ({ creators }) => {
  return (
    <div>
      {creators.map((profile) => (
        <div className="projectCard" key={profile.id}>
          <h2>{profile.name}</h2>
          <Link to={`/profile/${profile.id}`}>
            <img src={profile.image} alt={`${profile.name}'s profile picture`} />
          </Link>
          <p>{profile.bio}</p>
          <p>{profile.skills}</p>
          <p>{profile.projects}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;


