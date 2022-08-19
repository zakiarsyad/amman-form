const LoginPage = ({
    username,
    handleUsernameChange,
    password,
    handlePasswordChange,
    handleLoginClick,
}) => {
    return (
        <div>
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

export default LoginPage