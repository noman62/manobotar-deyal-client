import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loggin } from '../../features/userSlice/userSlice'
import '../Login/Login.css'
import { SyncOutlined } from '@ant-design/icons'



const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const history = useHistory()
  const dispatch = useDispatch()
  //Handle form state
  const handleChange = e => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('https://manobotar-deyal-backend.onrender.com/api/login', {
        ...user
      })
      .then(response => {
        console.log('success', response.data)
        dispatch(
          loggin({
            user: response.data
          })
        )
        
        setTimeout(() => {
          setLoading(false)
        }, 1000)

        if (response.data.email) {
          console.log(response.data.email)
          history.push('home')
        }
      })
    
  }
  return (
    <div>
      <div className='signin-form'>
        <form onSubmit={handleSubmit}>
          <h2>Sign In </h2>
          <div className='form-group'>
            <input
              type='email'
              class='form-control input-lg'
              name='email'
              placeholder='Email Address'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control input-lg'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              required='required'
            />
          </div>
          <div className='form-group'>
            <button
              type='submit'
              disabled={loading}
              className='btn btn-success btn-lg btn-block signin-btn'
            >
               {loading ? <SyncOutlined spin /> : 'SUBMIT'}
            </button>
            
          </div>
          <div className='text-center small'>
            Already have an account? <a href='/signUp'>Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
