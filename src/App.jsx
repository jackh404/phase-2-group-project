import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useState } from "react";

function App(){
    const [user, setUser] = useState(null)
    return (
        <>
            <header>
                <NavBar user={user}/>
            </header>
            <Outlet context={[user,setUser]}/>
        </>
    )
}

export default App