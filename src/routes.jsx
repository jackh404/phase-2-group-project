import About from "./pages/About";
import Creator from "./pages/Creator";
import Creators from "./pages/Creators";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Project from "./Components/Project";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import App from "./App";

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
                element: <Creators />,
            },
            {
                path:"/projects",
                element: <Projects />,
            },
            {
                path:"creator/:id",
                element: <Creator />,
            },
            {
                path:"project/:id",
                element: <Project />,
            },
            {
                path:"login",
                element: <Login />,
            }
        ]
    }
]

export default routes