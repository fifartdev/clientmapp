import { useEffect, useRef } from 'react'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'


function Login() {

  const { user, loginUser } = useAuth()

  const loginForm = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (user){
      navigate('/')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    const userInfo = {
      email,
      password
    }

    loginUser(userInfo)

  }

  return (
    <div className="container">
      <h1>{import.meta.env.TEST}</h1>
      <div className='login-register-container'>
        <form onSubmit={handleSubmit} ref={loginForm}>
          <div className='form-field-wrapper'>
            <label>Email:</label>
            <input 
            required
            type='email'
            name='email'
            placeholder='Email...'
            />
          </div>
          <div className='form-field-wrapper'>
            <label>Password</label>
            <input
            required
            type='password'
            name='password'
            placeholder='Password...'
            autoComplete='password'
            />
          </div>
          <div className='form-field-wrapper'>
            <input
            type='submit'
            value="Login"
            className='btn'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login




