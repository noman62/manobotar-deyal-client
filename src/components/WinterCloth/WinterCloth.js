import { useEffect } from 'react';
import { useState } from 'react';

import { clothData } from '../../FakeData/WinterCloth';
import './WinterCloth.css';

const WinterCloth = () => {
    const [donateProducts, setDonateProducts] = useState([]);
    const [serachItem,setSearchItem]=useState('');
    useEffect(() => setDonateProducts(clothData), []);
    
    return (
        <div>


            <div class="container-fluid donated-product">
                <div class="row mb-5 mt-5">
                    <div class="col-sm-12 text-center p-3">
                        <h1><b>Product For Donation</b></h1>
                        <input type="text" className='pl-5 pr-5 rounded-pill border-primary' placeholder='search....' onChange={e=>{setSearchItem(e.target.value)}}/>
                        
                    </div>

                </div>
                <div class="row p-4">
                    {
                        donateProducts.filter((product)=>{
                            if(serachItem==""){
                                return product
                            }else if(product.details.toLowerCase().includes(serachItem.toLowerCase())){
                                return product
                            }
                        }).map((product, index) => {
                         if(index===0){
                            return (
                                <div class="col-md-3  mb-3 col-sm-6 ">
                                    <div class="product-d   text-center">
                                        <img src={product.image} alt="" />
                                        <h4>{product.name}</h4>
                                 


                                        {/* <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star "></span>
                                        <span class="fa fa-star"></span>

                                        <span className='mx-2'>39%</span> */}

                                        <button class="btn m-2 btn-primary">See More </button>
                                    </div>
                                </div>
                            )
                         }else if(index===1){
                            return (
                                <div class="col-md-3  mb-3 col-sm-6 ">
                                    <div class="product-d   text-center">
                                        <img src={product.image} alt="" />
                                        <h4>{product.name}</h4>
                                 


                                        {/* <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>

                                        <span className='mx-2'>89%</span> */}

                                        <button class="btn m-2 btn-primary">See More </button>
                                    </div>
                                </div>
                            )
                         }else if(index===2){
                            return (
                                <div class="col-md-3  mb-3 col-sm-6 ">
                                    <div class="product-d   text-center">
                                        <img src={product.image} alt="" />
                                        <h4>{product.name}</h4>
                                 

{/* 
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>

                                        <span className='mx-2'>99%</span> */}

                                        <button class="btn m-2 btn-primary">See More </button>
                                    </div>
                                </div>
                            )
                         }
                        })
                    }
                </div>


            </div>
        </div>
    );
};

export default WinterCloth;