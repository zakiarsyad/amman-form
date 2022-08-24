import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Profiles() {
    const params = useParams();

    const [name, setName] = useState('');

    useEffect(() => {
        const id = params.id;

        const data = localStorage.getItem(id)

        setName(data)
    })

    return (
        <div>
            <h1>This is {name}'s profile page</h1>
        </div>
    )
}

export default Profiles;