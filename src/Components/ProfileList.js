import React, {useEffect, useState} from 'react';

const profiles = [
  {
    id :"",
    name : "",
    skills : [""],
    projects: [""],
    bio: ""
    picture: '',

  },
  {
    id :"",
    name : "",
    skills : [""],
    projects: [""],
    bio: ""
    picture: '',

  },
    id :"",
    name : "",
    skills : [""],
    projects: [""],
    bio: ""
    picture: '',

];

const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);
    
    useEffect(() => {
        //FETCH DATA FROM JSON

        fetch(' ')
        .then((response) => response.json())
        .then((data) => setProfiles(data.profiles))
    }, );
    return (
      <div>
        {profiles.map((profile, index) => (
          <div key={index}>
            <h2>{profile.name}</h2>
            <img src={profile.picture} alt={profile.name} />
            <p>{profile.bio}</p>
          </div>
        ))}
      </div>
    );
  };
  export default ProfileList;
  


