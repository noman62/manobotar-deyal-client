import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UserRequestForm = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: '',
        nid: '',
        productName: '',
        productDetails: '',

    })

    //Handle form state
    const handleChange = e => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)
    }


    const handleSubmit = e => {
        e.preventDefault()
        const { name, nid, productName, productDetails } = user;
        const url = `http://localhost:8080/request`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, nid, productName, productDetails
            })
        })
            .then(res => {
                console.log('server side response')
                window.alert("data inserted Successfully");
               
            })

    };


    return (
       <div className='container'>
            <div className='m-3'>
            <form onSubmit={handleSubmit}>
                <label for="inputproductname">Name:</label>
                <input type="text" class="form-control" required id="inputAddress" placeholder="Enter Your Name"
                    name='name'
                    onChange={handleChange}
                />
                <label for="inputproductname">NID Number:</label>
                <input type="text" class="form-control" required id="inputAddress" placeholder="Enter Your NID number"
                    name='nid'
                    onChange={handleChange}
                />
                <label for="inputproductname">Requested Product:</label>
                <input type="text" class="form-control" required id="inputAddress" placeholder="Laptop/mobile"
                    name='productName'
                    onChange={handleChange}
                />
                <label for="inputproductconfigurtion">Configuration of Product </label>
                <textarea class="form-control" required placeholder="Product Model, EMI number etc" id="" cols="30" rows="3"
                    name='productDetails'
                    onChange={handleChange}
                ></textarea>
                <div className="form-row mt-5">
                    <div className="form-group col-md-12 text-center">
                        <button type="submit" className=" btn btn-info w-50">Submit Request </button>
                    </div>
                </div>
            </form>
        </div>
       </div>
    );
};

export default UserRequestForm;