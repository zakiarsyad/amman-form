import PropTypes from 'prop-types'

import './style.css'

const LoginPage = ({
  username,
  handleUsernameChange,
  password,
  handlePasswordChange,
  handleLoginClick,
}) => {
  return (
    <div id="login-page">
      <form>
        <div>
          <label>username</label>
          <input value={username} onChange={handleUsernameChange}></input>
        </div>

        <div>
          <label>password</label>
          <input value={password} onChange={handlePasswordChange}></input>
        </div>

        <button onClick={handleLoginClick}>Login</button>
      </form>
    </div>
  );
}

LoginPage.prototype = {
  username: PropTypes.string,
  handleUsernameChange: PropTypes.func,
  password: PropTypes.string,
  handlePasswordChange: PropTypes.func,
  handleLoginClick: PropTypes.func,
}

export default LoginPage