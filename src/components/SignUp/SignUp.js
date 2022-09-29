import axios from 'axios'
import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'

import '../Login/Login.css'
const SignUp = () => {
    const history = useHistory()
    const [user, setUser] = useState({
      name: '',
      email: '',
    //   number:'',
    //   nid:'',
      password: ''
    })
  
    //Handle form state
    const handleChange = e => {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
    //Handle Form Submit
    const handleSubmit = e => {
      e.preventDefault()
  
      axios
        .post('https://immense-badlands-43010.herokuapp.com/api/register', {
          ...user
        })
        .then(response => {
          console.log('success', response)
          history.push('login')
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  return (
    <div>
      <div className='signin-form'>
        <form onSubmit={handleSubmit}>
          <h2>Create An Account</h2>
          <div className='form-group'>
            <input
              type='text'
              className='form-control input-lg'
              name='name'
              placeholder='name'
              onChange={handleChange}
              
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              class='form-control input-lg'
              name='email'
              placeholder='Email Address'
              onChange={handleChange}
             
            />
          </div>
          {/* <div className='form-group'>
            <input
              type='text'
              class='form-control input-lg'
              name='number'
              placeholder='Phone Number'
              onChange={handleChange}
              
            />
          </div> */}
          {/* <div className='form-group'>
            <input
              type='text'
              class='form-control input-lg'
              name='nid'
              placeholder='Enter NID Number'
              onChange={handleChange}
              
            />
          </div> */}
    
          <div className='form-group'>
            <input
              type='password'
              className='form-control input-lg'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              
            />
          </div>
          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-success btn-lg btn-block signin-btn'
            >
              Sign Up
            </button>
          </div>
          <div className='text-center small'>
            Already have an account? <a href='/login'>Login here</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
