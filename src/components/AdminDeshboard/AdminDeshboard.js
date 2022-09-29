import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'
import AllRequest from '../AllRequest/AllRequest'
import Test from '../Test/Test'
import UserRequest from '../UserRequest/UserRequest'

const AdminDeshboard = () => {
  const [allDonar, setAllDonar] = useState([])

  const [status, setStatus] = useState(true)

  const user = useSelector(selectUser)
 


 
  const getAppointments = async () => {
    const { data } = await axios.get('https://immense-badlands-43010.herokuapp.com/api/donations')
    setAllDonar(data)
    console.log(data)
  }

  useEffect(() => {
    getAppointments()
  }, [])
  const handleButton = () => {
    if (status) {
      setStatus(false)
    } else {
      setStatus(true)
    }
  
  }
  return (
    <div>
      <div class='pill2'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12'>
              <nav>
                <div class='nav nav-tabs' id='nav-tab' role='tablist'>
                  <a
                    class='nav-item nav-link active'
                    id='nav-admin-profile-tab'
                    data-toggle='tab'
                    href='#nav-admin-profile'
                    role='tab'
                    aria-controls='nav-admin-profile'
                    aria-selected='true'
                  >
                   Profile
                  </a>
                  <a
                    class='nav-item nav-link'
                    id='nav-donate-list-tab'
                    data-toggle='tab'
                    href='#nav-donate-list'
                    role='tab'
                    aria-controls='nav-donate-list'
                    aria-selected='false'
                  >
                    Donate List
                  </a>
                  <a
                    class='nav-item nav-link'
                    id='nav-request-list-tab'
                    data-toggle='tab'
                    href='#nav-request-list'
                    role='tab'
                    aria-controls='nav-request-list'
                    aria-selected='false'
                  >
                    User List
                  </a>
                  <a
                    class='nav-item nav-link'
                    id='nav-user-list-tab'
                    data-toggle='tab'
                    href='#nav-user-list'
                    role='tab'
                    aria-controls='nav-user-list'
                    aria-selected='false'
                  >
                    Request List
                  </a>
                </div>
              </nav>
              <div class='tab-content text-center m-4' id='nav-tabContent'>
                <div
                  class='tab-pane fade show active'
                  id='nav-admin-profile'
                  role='tabpanel'
                  aria-labelledby='nav-admin-profile-tab'
                >
                  <img
                    class='user-deshboard-image'
                    src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                    alt=''
                    srcset=''
                  />
                  <table class='table'>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>{user?.user?.name}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{user?.user?.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-donate-list'
                  role='tabpanel'
                  aria-labelledby='nav-donate-list-tab'
                >
                  <h3>Donation List</h3>

                  <table class='table'>
                    <thead>
                      <tr>
                        <th>Index No</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user !== null && user.user && user.user.role === 'admin' && (
                        <>
                          {allDonar.map((donar, index) => {
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{donar.productName}</td>
                                <td>{donar.productDetails}</td>
                                <td>
                                  <button className='btn btn-success'>
                                    Approved
                                  </button>
                                  {/* <button className={status ? "btn btn-warning" : "btn btn-success"} onClick={handleButton}>
                                  {
                                    status ? "Pending" : "Approved"
                                  }
                                </button> */}
                                  {/* <button onClick={() => handleDelete(donar._id)} class="btn btn-sm btn-danger ml-2">Delete</button> */}
                                </td>
                              </tr>
                            )
                          })}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-request-list'
                  role='tabpanel'
                  aria-labelledby='nav-request-list-tab'
                >
                  <h3>User List</h3>
                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <Test />
                    </>
                  )}

                  {/* <table class="table">
                    <thead>
                      <tr>
                        <th>Index No</th>
                        <th>Product Name</th>
                        <th>NID</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody> */}
                  {/* <Test/> */}
                  {/* {
                        allRequest.map((request, index) => {
                          return (
                            <>

                              <tr>
                                <td>{index + 1}</td>
                                <td>{request.productName} </td>
                                <td>{request.nid} </td>
                                <td>{request.description}</td>
                                <td>
                                  <button className={status ? "btn btn-warning" : "btn btn-success"} onClick={handleButton}>
                                    {
                                      status ? "Pending" : "Approved"
                                    }
                                  </button>
                                  <button onClick={() => handleRequestDelete(request._id)} class="btn btn-danger ml-2">Delete</button>
                                </td>

                              </tr>
                            </>
                          )
                        })
                      } */}
                  {/* </tbody>

                  </table> */}
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-user-list'
                  role='tabpanel'
                  aria-labelledby='nav-user-list-tab'
                >
                  <h3>Request List</h3>

                  {user !== null && user.user && user.user.role === 'user' && (
                    <>
                      <UserRequest/>
                    </>
                  )}
                  
                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                     <AllRequest/>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDeshboard
