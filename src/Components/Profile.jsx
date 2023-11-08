
const Profile = ({ name, picture, bio }) => {
    return (
      <div  className="profile">
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    );
  };

  export default Profile