import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice/userSlice';
const DonateForm = () => {
    const history = useHistory();
    const [imageURL, setImageURL] = useState(null);
    // const [visible, setVisible] = useState(false)
    // const [box, setBox] = useState(false)
    const [user, setUser] = useState({
        productName: '',
        productDetails: '',
        reasons: '',
        email:'',
        imageURL: ''
    })
    const newUser = useSelector(selectUser)
    //Handle form state
    const handleChange = e => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)
    }
    const handleImageUpload = (event) => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '668f9a81c863630a432f6a4184904575');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log(res.data.data.display_url);
                setImageURL(res.data.data.display_url);
                setUser({ ...user, imageURL: res.data.data.display_url })
            })
            .catch(error => {
                console.log(error);
            })
    }

 

      const handleSubmit = e => {
        e.preventDefault()
        if (user === null) return history.push('/login')
        axios
          .post('https://immense-badlands-43010.herokuapp.com/api/donation', {
            ...user,
            email: newUser.user.email
          })
          .then(response => {
            console.log('success', response)
            history.push('home')
          })
          .catch(error => {
            console.log(error.response)
          })
      }
 
    // const handleRadioButton = () => {
    //     if (!visible) {
    //         setVisible(true)
    //     } else {
    //         setVisible(false)
    //     }
    // }

    return (
        <div className='container'>
            <div style={{ margin: '100px' }}>
                <form onSubmit={handleSubmit} class="m-4">

                    <div class="form-group col-md-8">
                        <label for="inputproductname">Product Name</label>
                        <input type="text" required class="form-control" id="inputAddress" placeholder="Laptop/mobile"
                            name='productName'
                            onChange={handleChange}
                        />
                    </div>
                    <div class="form-group col-md-8">
                        <label for="inputproductdetails">Product Details</label>
                        <textarea class="form-control" required placeholder="Product Model, EMI number etc" id="" cols="30" rows="3"
                            name='productDetails'
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div class="form-group col-md-8">

                        <label for="inputproductreason">Reasons For Donaton</label>
                        <textarea class="form-control" required placeholder="Why are you donating this product?" id="" cols="30" rows="3"
                            name='reasons'
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div class="form-group col-md-8">

                        <label for="files">Select Images:</label>
                        <input class="form-control" type="file" id="files" required multiple
                            name='imageURL'
                            onChange={handleImageUpload}
                        /><br /><br />
                    </div>

                    <div class="form-group col-md-8">
                        <div className="form-group col-md-12 text-center">
                            <button type="submit" className=" btn btn-info w-50">Submit Donation </button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default DonateForm;
