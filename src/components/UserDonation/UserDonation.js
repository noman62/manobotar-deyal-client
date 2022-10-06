import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'

const UserDonation = () => {
  const [allUser, setAllUser] = useState([])
  const user = useSelector(selectUser)
  console.log(user.user.email)

  const getAllUser = async () => {
    const { data } = await axios.get(
      `https://immense-badlands-43010.herokuapp.com/api/user-donation?email=${user.user.email}`
    )
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th>Index No</th>
            <th>Product Name</th>
            <th>Reasons</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{donar.productName}</td>
                <td>{donar.reasons}</td>
                <td>{donar.status}</td>
                <td>
                  {donar.status === 'Pending' ? (
                    <>
                    <button className='btn btn-warning'>Pending</button>
                    </>
                  ) : (
                    <>
                     <button className='btn btn-success'>Approved</button> 
                    </>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserDonation
