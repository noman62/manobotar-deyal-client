import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectStatus } from '../../features/requestSlice/requestSlice';
import { FaStar } from "react-icons/fa"
import './DonatePage.css';
import axios from 'axios';

const DonatePage = () => {
  const [donateProducts, setDonateProducts] = useState([]);
  // const requestStatus = useSelector(selectStatus)
  // console.log(requestStatus);
  let history = useHistory();
  const [appointmentInfo, setAppointmentInfo] = useState([])

  const getAppointments = async () => {
    const { data } = await axios.get(
      "https://immense-badlands-43010.herokuapp.com/api/donations"
    )
    setAppointmentInfo(data)
    console.log(data)
  }

  useEffect(() => {
    getAppointments()
  }, [])
  const handleProduct = (singleId) => {
    history.push(`/singledonationpage/${singleId}`);
  }

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const handleClick = value => {
    setCurrentValue(value)
  };
  const handleMouseHover = value => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  }
  return (
    <div>
      <div class="container-fluid   d-flex  ">
        <div class="row  ">
        <div class="col-sm-2  bg-white  ">
          <div class="catagory-list">
          <h2>Catagory List</h2>
            <ul>
              {/* <li>
              <a class="cat-link" href="#">All</a>
              </li> */}
              <li>
              <a class="cat-link" href="cloth">Winter Clothes</a>
              </li>
              <li>
              <a class="cat-link" href="electronic">Electric Device</a>
              </li>
              <li>
              <a class="cat-link" href="food">Food</a>
              </li>
            </ul>
           
          </div>
          </div>
          <div class="col-sm-10 text-center donate-main justify-content-center align-items-center ">
            <h1 class="text-uppercase pb-4">MAKE A <b>DONATION</b></h1>
            <h3 class="text-uppercase">How to make a Donation?</h3>
            <p class=" w-75 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis molestias fugiat tenetur recusandae pariatur labore maxime. Quam, dolore sint.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut voluptates ab! Beatae rerum, nesciunt aliquam fugiat similique modi voluptatem!
            </p>
            <a class="btn btn-primary px-4 create-button" href="/donateForm">Make Your Donation</a>
          </div>

        </div>

      </div>

      <div class="container-fluid donated-product">
        <div class="row">
          <div class="col-sm-12 text-center p-3">
            <h1><b>Product For Donation</b></h1>
          </div>

        </div>
        <div class="row p-4">
          {
            appointmentInfo.map((product, index) => {
              return (
                <div class="col-md-3  mb-3 col-sm-6 ">
                  <div class="product-d   text-center">
                    <img class=" w-100" src={product.imageURL} alt="" />
                    <h4>{product.productName}</h4>
                    <p><small>{product.productDetails}</small></p>

                    
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>

                    <span className='mx-2'>39%</span>

                    <button onClick={() => handleProduct(product._id)} class="btn m-2 btn-primary">See More </button>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div class="row ">
          <div class="col-sm-12 m-3 text-center">
            <a class="btn btn-primary">More Donation</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DonatePage;