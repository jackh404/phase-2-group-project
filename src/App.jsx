import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useState,useEffect } from "react";


function App(){
    const [user, setUser] = useState(null)
    const [creators, setCreators] = useState([])
    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState([])
    const fetchData = async () => {
        const response = await fetch("https://ccserver-obi1.onrender.com/creators")
        const data = await response.json()
        setCreators(data)
        const response2 = await fetch("https://ccserver-obi1.onrender.com/projects")
        const data2 = await response2.json()
        setProjects(data2)
        const response3 = await fetch("https://ccserver-obi1.onrender.com/skills")
        const data3 = await response3.json()
        setSkills(data3)
    }
    useEffect(() => {
        fetchData();
    }, [user])
   //patch reminder matthew sdandr
    return (
        <>
            <header>
                <NavBar user={user}/>
            </header>
            <main>
                <Outlet context={[user,setUser,creators,projects,skills]}/>
            </main>
            <footer>
                <p><i className="fa-brands fa-creative-commons"></i>  AllForge 2023</p>
            </footer>
        </>
    )
}

export default App