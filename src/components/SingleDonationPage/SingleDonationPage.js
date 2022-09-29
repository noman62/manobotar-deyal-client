import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RatingStar from '../RatingStar/RatingStar';
import RequestModal from '../RequestModal/RequestModal';

const SingleDonationPage = () => {
  const history=useHistory();
  const { singleId } = useParams();
  
  const [product, setProduct] = useState([]);


  // useEffect(() => {
  //   fetch(`http://localhost:8000/api/donation/${singleId}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setProduct(data)
  //       console.log(product);
  //     });
  // }, [])
  useEffect(() => {
    const getDonation = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/donation/${singleId}`
      )
      setProduct(data)
      // console.log(data)
    }
    getDonation ()
  }, [singleId])

  const handleBook=()=>{
    window.alert("Booking Successfully")
    history.push("/home")
  }
  return (
    <div>
      <div class="signal-donate">
        <div class="container  py-4">
          <div class="row">
            <div class="col-sm-6">
              <div class="product-container my-2">
                <div class="mySlides">
                  <img class="w-100" src={product.imageURL} />
                </div>



              </div>
            </div>
            <div class="col-sm-6">
              
              <h4><b>Product Name:</b></h4>
              <h3><b>Product Name:</b> {product.productName}</h3>
              <h4><b>Reason For Donation:</b></h4>
              <p>{product.reasons}</p>
              <h4><b>Product Review:</b></h4>
              <RatingStar/>
              <h4><b>Contact Information</b></h4>
              <p><b>Phone:</b>+0000000 </p>
              <p><b>Email:</b>eeee@email.com</p>
              <p><b>Address:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil </p>
              <a href="#" class="btn btn-primary" onClick={handleBook} >Book Now</a>
              <RequestModal/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleDonationPage;