import React, { useState } from 'react';

const ProfileCard = ({ profile, onDeleteProfile }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
  };

  const handleDislike = () => {
    onDeleteProfile(profile.id);
  };

  return (
    <div className="profile-card">
      <img src={profile.picture} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <div className="actions">
        <button onClick={handleDislike} className="dislike-button">
          <i className="fas fa-times"></i> Dislike
        </button>
        {!liked ? (
          <button onClick={handleLike} className="like-button">
            <i className="fas fa-heart"></i> Like
          </button>
        ) : (
          <button className="message-button">
            <i className="fas fa-comment"></i> Send a Message
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
