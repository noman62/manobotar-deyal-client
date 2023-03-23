import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './DonatePage.css'
import axios from 'axios'

const DonatePage = () => {
  const [serachItem, setSearchItem] = useState('')
  
  let history = useHistory()
  const [appointmentInfo, setAppointmentInfo] = useState([])

  const getAppointments = async () => {
    const { data } = await axios.get(
      'https://manobotar-deyal-backend.onrender.com/api/donations'
    )

    setAppointmentInfo(data)
  }
  const getFilterInfo = product => {
    const updateItem = appointmentInfo.filter(item => {
      return item.productDetails === product
    })
    console.log(updateItem)
    setAppointmentInfo(updateItem)
  }

  useEffect(() => {
    getAppointments()
  }, [])

  const filterItem = data => {
    console.log(data)
    getFilterInfo(data)
  }
  const handleProduct = singleId => {
    history.push(`/singledonationpage/${singleId}`)
  }
  const searchRecord=async()=>{
    
    const { data } = await axios.get(
      `https://manobotar-deyal-backend.onrender.com/api/search?productName=${serachItem}`
    )
   
    setAppointmentInfo(data)
  }

  return (
    <div>
      <div class='container-fluid   d-flex  '>
        <div class='row  '>
          <div class='col-sm-2  bg-white  '>
            <div class='catagory-list'>
              <h2>Catagory List</h2>
              <ul>
                <li onClick={() => filterItem('cloth')}>Winter Clothes</li>
                <li onClick={() => filterItem('laptop')}>Electric Device</li>
                <li onClick={() => filterItem('food')}>Food</li>
                <li onClick={() => filterItem('home-appliances')}>Home & Appliances</li>
                <li onClick={() => filterItem('sports')}>Sports & Outdoors</li>
                <li onClick={() => filterItem('vehicle')}>Vehicle</li>

              </ul>
            </div>
          </div>
          <div class='col-sm-10 text-center donate-main justify-content-center align-items-center '>
            <h1 class='text-uppercase pb-4'>
              MAKE A <b>DONATION</b>
            </h1>
            <h3 class='text-uppercase'>How to make a Donation?</h3>
            <p class=' w-75 mx-auto'>
              First, You have to create an account in our website.For creating
              new account, you need to give some information. Then , You have go
              to 'Donate' option and give the information which is
              asked.Finally, you can post for donation.
            </p>
            <a class='btn btn-primary px-4 create-button' href='/donateForm'>
              Make Your Donation
            </a>
          </div>
        </div>
      </div>

      <div class='container-fluid donated-product'>
        <div class='row'>
          <div class='col-sm-12 text-center p-3'>
            <h1>
              <b>Product For Donation</b>
            </h1>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-3'></div>
          <div class='col-md-6'>
            <div class='input-group mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder="Search By Name"
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                onChange={e=>{setSearchItem(e.target.value)}}
              />
              <div class='input-group-append'>
                <button class='btn btn-success' onClick={searchRecord} type='button'>
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class='col-md-3'></div>
        </div>
        <div class='row p-4'>
          {appointmentInfo.map((product, index) => {
            return (
              <>
                {product.status === 'Pending' ? (
                  <></>
                ) : (
                  <>
                    <div class='col-md-3  mb-3 col-sm-6 '>
                      <div class='product-d   text-center'>
                        <img
                          class='h-50  w-100'
                          src={product.imageURL}
                          alt=''
                        />
                        
                        <p>
                        <p>{product.productName}</p>
                        </p>

                        <button
                          onClick={() => handleProduct(product._id)}
                          class='btn m-2 btn-primary'
                        >
                          See More{' '}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            )
          })}
        </div>
        <div class='row '>
         
        </div>
      </div>
    </div>
  )
}

export default DonatePage
