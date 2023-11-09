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
            <main>
                <Outlet context={[user,setUser]}/>
            </main>
            <footer>
                <p><i className="fa-brands fa-creative-commons"></i>  AllForge 2023</p>
            </footer>
        </>
    )
}

export default App