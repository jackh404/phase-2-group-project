// import { useEffect, useState } from "react";
// import icon from '../assets/img/icon.png';
// import {useParams} from "react-router-dom";



// const Profile = ({ name, picture, bio }) => {
// const [profile, setProfile] = useState([]);
// const params = useParams();
// const profile = params.profile
// const [loading, setLoading] = useState(true);

// useEffect(() => {

//   const dbserver = 'https://ccserver-obi1.onrender.com/';
//   fetch(`${dbserver})creators`)
//   .then((response) => response.json())
//   .then((data) => {
//     setProfile(data);
//     setLoading(false);
//   })
//   .catch((error) => {
//     console.error("error fetching data", error);
//     setLoading(false);
//   });


//   }, []);


// return (
//   <div>
//     {loading ? (
//       <p>Loading...</p>
//     ) : (
//       <div>
//         {profile.map((profile) => (
//           <div>
//             <h2>{profile.name}</h2>
//             <img src={icon} alt={"profile picture"}/>
//             <p>{profile.bio}</p>
//             <p>{profile.skills}</p>
//             <p>{profile.projects}</p>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// )};


// export default Profile