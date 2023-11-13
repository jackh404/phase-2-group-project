import { useOutletContext } from "react-router-dom";

const Profile = ({ name, picture, bio }) => {
  const { user, projects, skills, creators } = useOutletContext();
  return (
    <div className="profile">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
