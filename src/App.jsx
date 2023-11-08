import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useState } from "react";





function App(){
    
   //patch reminder matthew sdandr
    const [user, setUser] = useState(null)
    return (
        <>
            <header>
                <NavBar user={user}/>
            </header>
            <div id="container">
                <Outlet context={[user,setUser]}/>
            </div>
            <footer>
                <p>©AllForge 2023</p>
            </footer>
        </>
    )
}

export default App