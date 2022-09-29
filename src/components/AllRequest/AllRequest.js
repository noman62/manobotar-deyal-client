import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'

const AllRequest = () => {
  const [allUser, setAllUser] = useState([])
  const user = useSelector(selectUser)


  const getAllUser = async () => {
    const { data } = await axios.get('https://immense-badlands-43010.herokuapp.com/api/allrequest')
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
            <th>Name</th>
            <th>nid</th>
            <th>Reasons</th>

            
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{donar.name}</td>
                <td>{donar.nid}</td>
                <td>{donar.reasons}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AllRequest
