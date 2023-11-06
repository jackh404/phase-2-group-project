import { useRouteError } from "react-router-dom";

function ErrorPage({props}){
    const error = useRouteError()
    console.error(error)

    return (
    <div id="errorPage">
        <h1>Yikes!</h1>
        <p>Looks like we ran into an unexpected error.</p>
        <p>
            <em>{error.status + " " + error.statusText || error.message}</em>
        </p>
    </div>
    )
}

export default ErrorPage