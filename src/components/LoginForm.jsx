import { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    handleSubmit({
      username: username,
      password: password,
    })
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          username{' '}
          <input
            value={username}
            id='username'
            autoComplete="username"
            name="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password{' '}
          <input
            type="password"
            id='password'
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" id='login-button'>login</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default LoginForm
