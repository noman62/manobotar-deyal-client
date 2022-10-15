import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const AllRequest = () => {
  const [allUser, setAllUser] = useState([])
  const user = useSelector(selectUser)
  const history = useHistory()
  const getAllUser = async () => {
    const { data } = await axios.get(
      'https://immense-badlands-43010.herokuapp.com/api/allrequest'
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
      .put(
        `https://immense-badlands-43010.herokuapp.com/api/updateRequest/${id}`,
        { withCredentials: true }
      )
      .then(res => {
        console.log('success', res)
        window.location.reload(false)
        history.push('admindeshboard')
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  const handleDelete = id => {
    fetch(
      `https://immense-badlands-43010.herokuapp.com/api/deleteRequest/${id}`,
      {
        method: 'DELETE'
      }
    )
      .then(res => res.json())
      .then(result => {
        if (result) {
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
            {/* <th>nid</th> */}
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
                {/* <td>{donar.nid}</td> */}
                <td>{donar.reasons}</td>
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
                  <button
                    onClick={() => handleDelete(donar._id)}
                    className='btn btn-warning ml-2'
                  >
                    Delete
                  </button>
                </td>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AllRequest
