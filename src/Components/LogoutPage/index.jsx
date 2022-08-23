import PropTypes from 'prop-types'

import './style.css'

const LogoutPage = ({ handleLogoutClick }) => {
    return (
        <div id="logout-page">
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    )
}

LogoutPage.prototype = {
    handleLogoutClick: PropTypes.func,
}

export default LogoutPage