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
      'https://immense-badlands-43010.herokuapp.com/api/donations'
    )
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  const updateStatus=async(id)=>{
    console.log(id);
    axios
    .put(
      `https://immense-badlands-43010.herokuapp.com/api/update/${id}`,
      { withCredentials: true }
    )
    .then(res => {
      console.log('success', res)
      window.location.reload(false);
      history.push('admindeshboard')
    })
    .catch(error => {
     
      console.log(error.response)
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
                    <button onClick={()=>updateStatus(donar._id)} className='btn btn-warning'>Pending</button>
                    </>
                  ) : (
                    <>
                     <button  className='btn btn-success'>Approved</button> 
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

export default AllDonation
