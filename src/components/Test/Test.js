import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const Test = () => {
  const [allUser, setAllUser] = useState([])
  const history = useHistory()
  const user = useSelector(selectUser)
  const getAllUser = async () => {
    const { data } = await axios.get(
      'https://immense-badlands-43010.herokuapp.com/api/allUser'
    )
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  const handleDelete = id => {
    fetch(`https://immense-badlands-43010.herokuapp.com/api/delete/${id}`, {
      method: 'DELETE'
    })
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
            <th>SN</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <>
                {user !== null && user.user && user.user.role === 'admin' && (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{donar.name}</td>
                      <td>{donar.email}</td>
                      <td>{donar.mobile}</td>
                      <td>{donar.address}</td>

                      <td>
                        <button
                          onClick={() => handleDelete(donar._id)}
                          className='btn btn-danger ml-2'
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                )}
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Test
