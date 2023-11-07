import { useOutletContext } from "react-router-dom"
import LoginForm from "../Components/LoginForm"

function Login ({props}) {
    const [user] = useOutletContext()
    console.log(user)
    return <>
    <h1>Welcome to the AllForge.</h1>
    <p>Please log in.</p>
    <LoginForm />
    </>
}

export default Login