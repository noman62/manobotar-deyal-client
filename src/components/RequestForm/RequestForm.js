import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

import './RequestForm.css'
const Form = () => {
  const history = useHistory()
  const [request, setRequest] = useState({
    name: '',
    nid: '',
    email: '',
    reasons: ''
  })
  const user = useSelector(selectUser)

  const handleChange = e => {
    const newRequestInfo = { ...request }
    newRequestInfo[e.target.name] = e.target.value
    setRequest(newRequestInfo)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // if (user === null) return history.push('/login')

    axios
      .post('https://immense-badlands-43010.herokuapp.com/api/request', {
        ...request,
        email: user.user.email
      })
      .then(response => {
        console.log('success', response)
        window.location.reload(false)
        // history.push('/home')
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <div className='container'>
      <div style={{ marginLeft: '200px' }}>
        <div className='row'>
          <div id='upload' className='  col-8'>
            <form className='upload-form' onSubmit={handleSubmit}>
              <div className='form-row'>
                <div className='form-group col-md-12'>
                  <label for='notice-number'>Product name</label>
                  <input
                    type='text'
                    className='form-control form-control-sm'
                    id='notice-number'
                    required
                    placeholder='Type Product name'
                    onChange={handleChange}
                    name='name'
                    //   onChange={handleChange}
                    defaultValue=''
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-12'>
                  <label for='short-title'>NID Number</label>
                  <input
                    type='number'
                    className='form-control form-control-sm'
                    id='short-title'
                    required
                    placeholder='Type NID Number'
                    onChange={handleChange}
                    name='nid'
                    //   onChange={handleChange}
                    defaultValue=''
                  />
                </div>
              </div>

              <div class='form-row'>
                <div class='form-group col-md-12'>
                  <label for='description'>Reasons</label>
                  <textarea
                    class='form-control form-control-sm'
                    id='exampleFormControlTextarea1'
                    rows='2'
                    placeholder='short Description why you need it'
                    name='reasons'
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group col-md-12 text-center'>
                  <button type='submit' className=' btn btn-info w-50'>
                    Submit{' '}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
