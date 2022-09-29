import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './RequestForm.css'
const Form = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        productName: '',
        feature: '',
        occupation: '',
        nid: '',
        date: '',
        description: ''
    })

    //Handle form state
    const handleChange = e => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)
    }


    const handleSubmit = e => {
        e.preventDefault()
        const { productName, feature, occupation, nid, date, description } = user;
        const url = `http://localhost:8080/request`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productName, feature, occupation, nid, date, description
            })
        })
            .then(res => {
                console.log('server side response');
                window.alert("Request Successfully Submitted")
                history.push("/")
            })

    };



    return (
        <div className="container">
            <div style={{marginLeft:'200px'}}>
                <div className='row'>
                    <div id="upload" className='  col-8'>
                        <form className="upload-form" onSubmit={handleSubmit}>
                            <div className="form-row" >
                                <div className="form-group col-md-12">
                                    <label for="notice-number"> Product Name</label>
                                    <input type="text" className="form-control form-control-sm" id="notice-number" required placeholder="Type Product Name"
                                        name='productName'
                                        onChange={handleChange}
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="notice-title">feature</label>
                                    <input type="text" className="form-control form-control-sm" id="notice-title" placeholder="short details of the Product you want " required
                                        name='feature'
                                        onChange={handleChange}
                                        defaultValue=""
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="short-title">NID Number</label>
                                    <input type="text" className="form-control form-control-sm" id="short-title" required placeholder="Type NID Number"
                                        name='nid'
                                        onChange={handleChange}
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputBatch">Occupation</label>
                                    <select id="inputBatch" className="form-control form-control-sm"
                                        name='occupation'
                                        onChange={handleChange}
                                    >
                                        <option selected>Choose...</option>
                                        <option>student</option>
                                        <option>businessman</option>
                                        <option>teacher</option>
                                        <option>employee</option>
                                        <option>other</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="lastdate">Last Date</label>
                                    <input className="form-control form-control-sm" type="date" name="date" onChange={handleChange} id="" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="description">Reasons</label>
                                    <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="2"
                                        placeholder='short Description why you need it'
                                        name='description'
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12 text-center">
                                    <button type="submit" className=" btn btn-info w-50">Submit </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;