import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'
import { SyncOutlined } from '@ant-design/icons'
const DonateForm = () => {
  const history = useHistory()
  const [imageURL, setImageURL] = useState(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    productName: '',
    productDetails: '',
    reasons: '',
    email: '',
    imageURL: ''
  })
  const newUser = useSelector(selectUser)
  //Handle form state
  const handleChange = e => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
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
        setUser({ ...user, imageURL: res.data.data.display_url })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    if (user === null) return history.push('/login')
    axios
      .post('https://manobotar-deyal-backend.onrender.com/api/donation', {
        ...user,
        email: newUser.user.email
      })
      .then(response => {
        console.log('success', response)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        history.push('home')
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <div className='container'>
      <div style={{ margin: '100px' }}>
        <form onSubmit={handleSubmit} class='m-4'>
          <div class='form-group col-md-8'>
            <label for='inputproductname'>Product Name</label>
            <input
              type='text'
              required
              class='form-control'
              id='inputAddress'
              placeholder='Enter Product Name'
              name='productName'
              onChange={handleChange}
            />
          </div>

         
          <div class='form-group col-md-8'>
            <select
              class='form-select'
              aria-label='Default select example'
              name='productDetails'
              onChange={handleChange}
            >
              <option selected>Select Product Type</option>
              <option >food</option>
              <option >cloth</option>
              <option >laptop</option>
              <option >electric</option>
              <option >home-appliances</option>
              <option >sports</option>
              <option >vehicle</option>

            </select>
          </div>
          <div class='form-group col-md-8'>
            <label for='inputproductreason'>Reasons For Donaton</label>
            <textarea
              class='form-control'
              required
              placeholder='Why are you donating this product?'
              id=''
              cols='30'
              rows='3'
              name='reasons'
              onChange={handleChange}
            ></textarea>
          </div>
          <div class='form-group col-md-8'>
            <label for='files'>Select Images:</label>
            <input
              class='form-control'
              type='file'
              id='files'
              required
              multiple
              name='imageURL'
              onChange={handleImageUpload}
            />
            <br />
            <br />
          </div>

          <div class='form-group col-md-8'>
            <div className='form-group col-md-12 text-center'>
              <button type='submit' className=' btn btn-info w-50'>
                {loading ? <SyncOutlined spin /> : 'SUBMIT'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DonateForm
