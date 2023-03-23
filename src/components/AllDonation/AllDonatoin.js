import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const AllDonation = () => {
  const [allUser, setAllUser] = useState([])
  const user = useSelector(selectUser)
  const history = useHistory()
  console.log(user.user.email)

  const getAllUser = async () => {
    const { data } = await axios.get(
      'https://manobotar-deyal-backend.onrender.com/api/donations'
    )
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  const updateStatus = async id => {
    console.log(id)
    axios
      .put(`https://manobotar-deyal-backend.onrender.com/api/update/${id}`, {
        withCredentials: true
      })
      .then(res => {
        console.log('success', res)
        window.alert("approved Successfully")
        window.location.reload(false)
        history.push('admindeshboard')
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const handleDelete = id => {
    fetch(
      `https://manobotar-deyal-backend.onrender.com/api/deleteDonation/${id}`,
      {
        method: 'DELETE'
      }
    )
      .then(res => res.json())
      .then(result => {
        if (result) {
          window.alert("delete successfully")
          window.location.reload(false)
          history.push('admindeshboard')
        }
      })
  }
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th>Index No</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Reasons</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{donar.email}</td>
                <td>{donar.productName}</td>
                <td>{donar.reasons}</td>
                {/* <td>{donar.status}</td> */}
                <td>
                  {donar.status === 'Pending' ? (
                    <>
                      <button
                        onClick={() => updateStatus(donar._id)}
                        className='btn btn-warning'
                      >
                        Pending
                      </button>
                    </>
                  ) : (
                    <>
                      <button className='btn btn-success'>Approved</button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(donar._id)}
                    className='btn btn-danger ml-2'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AllDonation
