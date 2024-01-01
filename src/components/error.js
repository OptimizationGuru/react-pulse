import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError()
    console.log(err)
    return (
        <div className="error">
            <h1>Oops! Something went Wrong</h1>
            <p>{err.status} {err.statusText}</p>
        </div>
    )
}

export default Error;