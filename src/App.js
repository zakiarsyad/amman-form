import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    // console.log('handleUsernameChange')
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    // console.log('handlePasswordChange')
    setPassword(event.target.value)
  }

  const handleLoginClick = (event) => {
    event.preventDefault();
    // console.log('handleLoginClick')

    console.log(username)
    console.log(password)
  }

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

export default App;
