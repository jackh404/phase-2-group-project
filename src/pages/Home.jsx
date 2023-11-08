import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../index.css'
import { NavLink, useOutletContext } from "react-router-dom";
import ProfileList from '../Components/ProfileList';

function Home() {
  const [user] = useOutletContext()

  
  return (
    <>
      <div>
        <h1>Welcome {user?`back, ${user.name}`:'to the AllForge!'}</h1>
      </div>
      <NavLink
        to="/projects"
        /* add styling to Navlink */
        className="nav-link"
      >
        List of Projects
      </NavLink>
      <ProfileList />
    </>
  )
}

export default Home
