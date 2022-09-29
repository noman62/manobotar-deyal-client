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


  useEffect(() => {
    const getDonation = async () => {
      const { data } = await axios.get(
        `https://immense-badlands-43010.herokuapp.com/api/donation/${singleId}`
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
     
              {/* <a href="#" class="btn btn-primary" onClick={handleBook} >Book Now</a> */}
              <RequestModal/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleDonationPage;