import { useState } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import LogoutPage from './Components/LogoutPage';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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

    setIsLoggedIn(true)
  }

  const handleLogoutClick = (event) => {
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    // Return logout button
    return <LogoutPage
      handleLogoutClick={handleLogoutClick}
    />
  } else {
    // Return login form
    return <LoginPage
      username={username}
      handleUsernameChange={handleUsernameChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      handleLoginClick={handleLoginClick}
    />
  }
}

export default App;
