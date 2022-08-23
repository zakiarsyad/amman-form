import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './style.css';
import LoginPage from '../../Components/LoginPage';
import LogoutPage from '../../Components/LogoutPage';

function App() {
  const navigate = useNavigate();

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

    // console.log(username)
    // console.log(password)

    // Cek validasi username dan password

    setIsLoggedIn(true)

    navigate('/profile')
  }

  const handleLogoutClick = (event) => {
    setIsLoggedIn(false)
  }

  useEffect(() => {
    // console.log('React hook is triggered!')
  })

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
