import { useParams } from "react-router-dom";

function Hello() {
    const params = useParams();

    return (
        <div>
            <h1>Hello {params.name}</h1>
        </div>
    )
}

export default Hello;