
import { SyncOutlined } from '@ant-design/icons'
import axios from 'axios'
import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const RequestModal = () => {
  const history = useHistory()
  const [imageURL, setImageURL] = useState(null)
  const [loading, setLoading] = useState(false)
  const [request, setRequest] = useState({
    name:'',
    imageURL: '',
    address:'',
    reference:'',
    email: '',
    reasons: ''
  })

  const user = useSelector(selectUser)

  const handleChange = e => {
    const newRequestInfo = { ...request }
    newRequestInfo[e.target.name] = e.target.value
    setRequest(newRequestInfo)
  }

  const handleImageUpload = event => {
    console.log(event.target.files)
    const imageData = new FormData()
    imageData.set('key', '668f9a81c863630a432f6a4184904575')
    imageData.append('image', event.target.files[0])

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(res => {
        console.log(res.data.data.display_url)
        setImageURL(res.data.data.display_url)
        setRequest({ ...request, imageURL: res.data.data.display_url })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    if (user === null) return history.push('/login')

    axios
      .post('https://immense-badlands-43010.herokuapp.com/api/request', {
        ...request,
        name:user.user.name,
        email: user.user.email,
        address:user.user.address,

      })
      .then(response => {
        console.log('success', response)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        
        history.push('/home')
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  return (
    <div>
      <button
        type='button'
        class='btn btn-primary'
        data-toggle='modal'
        data-target='#exampleModal'
      >
        Book Now
      </button>

      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Request Form
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <form className='upload-form' onSubmit={handleSubmit}>
            
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Income certificate</label>
                    <input
                      type='file'
                      className='form-control form-control-sm'
                      id='notice-number'
                      required
                      multiple
                      name='imageURL'
                      onChange={handleImageUpload}
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='short-title'>Reference</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='short-title'
                      required
                      placeholder='Type Reference'
                      onChange={handleChange}
                      name='reference'
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
                    {loading ? <SyncOutlined spin /> : 'SUBMIT'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-warning'
                data-dismiss='modal'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestModal
