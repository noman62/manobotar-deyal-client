import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Test = () => {
  const [allUser, setAllUser] = useState([])

  const getAllUser = async () => {
    const { data } = await axios.get('https://immense-badlands-43010.herokuapp.com/api/allUser')
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
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{donar.name}</td>
                <td>{donar.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Test
