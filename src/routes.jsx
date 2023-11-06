import About from "./pages/About";
import Creator from "./pages/Creator";
import Creators from "./pages/Creators";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Project from "./Components/Project";
import Projects from "./pages/Projects";

const routes = [
    {
        path:"/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path:"/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path:"/creators",
        element: <Creators />,
        errorElement: <ErrorPage />
    },
    {
        path:"/projects",
        element: <Projects />,
        errorElement: <ErrorPage />
    },
    {
        path:"creator/:id",
        element: <Creator />,
        errorElement: <ErrorPage />
    },
    {
        path:"project/:id",
        element: <Project />,
        errorElement: <ErrorPage />
    }
]

export default routes