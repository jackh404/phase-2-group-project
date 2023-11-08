import { useEffect, useState } from 'react';
import '../index.css'
import { Link, NavLink, useOutletContext } from "react-router-dom";
import Project from '../Components/Project';

function Home() {
  const [featuredProject,setFeatured] = useState({name:'Loading...',description:'Loading...'})
  const getFeature = async () =>{
    const resp = await fetch('https://ccserver-obi1.onrender.com/projects')
    const projects = await resp.json()
    console.log(projects)
    const featIndex = Math.floor(Math.random()*projects.length)
    console.log(featIndex)
    setFeatured(projects[featIndex])
  }
  useEffect(()=>{
    getFeature()
  },[])
  const [user] = useOutletContext()
  let message
  if(!user)
    message = <h3>If you are an existing user, please <Link to="/login">Log In</Link>. Otherwise, feel free to check out our featured projects below or our <Link to="/about">About page</Link>.</h3>
  else
    message = <h3>Check out featured projects by your fellow creators below!</h3>
  return (
    <div id='homePage'>
      <div>
        <h1>Welcome {user?`back, ${user.name}`:'to the AllForge!'}</h1>
        {message}
        <hr />
        <Project project ={featuredProject} />
      </div>
    </div>
  )
}

export default Home
