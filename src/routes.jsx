import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Project from "./Components/Project";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import App from "./App";
import ProfileList from "./Components/ProfileList";
import ProfileT from "./Components/ProfileT"
import Dashboard from "./pages/Dashboard";
// import Profile from "./Components/Profile";

const routes = [
    {
        path:"/",
        element:<App />,
        errorElement:<ErrorPage />,
        children: [

            {
                path:"/",
                element: <Home />,
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/creators",
                element: <ProfileList />,
            },
            {
                path:"/projects",
                element: <Projects />,
            },
            {
                path:"project/:id/",
                element: <Project />,
            },
            {
                path:"/login",
                element: <Login />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: '/profile/:id',
                element: <ProfileT />,
              },
            {
                // path: "/profile/:id",
                // element: <Profile />
            }
            



        ]
    }
]

export default routes