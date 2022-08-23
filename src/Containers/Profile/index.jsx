import { useNavigate } from "react-router-dom";

import './style.css'

function Profile() {
    const navigate = useNavigate();

    const handleLogoutButtonClick = () => {
        // console.log('handleLogoutButtonClick')

        navigate('/login')
    }

    return (
        <div id="profile">
            <h1>Welcome to this profile page!</h1>
            <button onClick={handleLogoutButtonClick}>Logout</button>
        </div>
    )
}

export default Profile;