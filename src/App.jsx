import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ProfileList from "./Components/ProfileList";
import Profile from "./Components/Profile"; // Make sure to import the correct path

function App() {
  const [user, setUser] = useState(null);
  const [creators, setCreators] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://ccserver-obi1.onrender.com/creators");
    const data = await response.json();
    setCreators(data);

    const response2 = await fetch("https://ccserver-obi1.onrender.com/projects");
    const data2 = await response2.json();
    setProjects(data2);

    const response3 = await fetch("https://ccserver-obi1.onrender.com/skills");
    const data3 = await response3.json();
    setSkills(data3);
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <Router>
      <>
        <header>
          <NavBar user={user} />
        </header>
        <main>
          <Routes>
            {/* Route for the profile list */}
            <Route
              path="/"
              element={<ProfileList creators={creators} />}
            />
            {/* Route for the individual profile */}
            <Route
              path="/profile/:id"
              element={<Profile creators={creators} />}
            />
          </Routes>
        </main>
        <footer>
          <p>
            <i className="fa-brands fa-creative-commons"></i> AllForge 2023
          </p>
        </footer>
      </>
    </Router>
  );
}

export default App;


