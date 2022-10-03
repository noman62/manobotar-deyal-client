import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice/userSlice';
import DonationSection from '../DonationSection/DonationSection';
import Faq from '../Faq/Faq';

const Home = () => {
    const user = useSelector(selectUser);
    return (
        <div>

            <div class="container-fluid donate ">
                <div class="row donate-bg d-flex justify-content-center align-items-center">

                    <div class="col-sm-6 p-4">
                        <h1>It's an online store, <br /> Where you can Donate or Request for Something you need.</h1>
                        <p>
                        If you want to buy something , which you can't effort.You can make a request. If you want to give away something ,which you don't use or need anymore.You can donate also.
                        </p>
                        <a class="btn btn-primary px-4 create-button" href="#">Get Started</a>
                    </div>
                    <div class="col-sm-6 text-center">
                        <img class="w-100" src="images/bProject.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="container-fluid image-section">
                <div class="row">
                <div class="col-sm-12 pt-4">
                        <h1 class="text-center text-uppercase text-light ">Images</h1>
                    </div>
                    <div class="col-sm-12">

                        <marquee direction="left">
                            <img src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2019/08/19/106932-untitled-design-20.jpg" width="250" height="150" alt="Natural" />
                            <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article530438.ece/ALTERNATES/s615/C_71_article_1092328_image_list_image_list_item_0_image.jpg" width="250" height="150" alt="Natural" />
                            <img src="https://thefinancialexpress.com.bd/uploads/1577031657.jpg" width="250" height="150" alt="Natural" />
                            <img src="http://blog.brac.net/wp-content/uploads/2018/01/Sumon-Yusuf_BD_Winter_MG_4392B_Edited.jpg" width="250" height="150" alt="Natural" />
                            <img src="https://borgenproject.org/wp-content/uploads/8076231056_04a9ab4af3_z.jpg" width="250" height="150" alt="Natural" />
                            <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/10/13/631844-indiahumger.jpg" width="250" height="150" alt="Natural" />
                        </marquee>
                    </div>
                </div>
               
            </div>
            <DonationSection />
            <div class="container-fluid request ">
                <div class="row request-bg d-flex">
                    <div class="col-sm-12 pt-4">
                        <h1 class="text-center text-uppercase ">Request Section</h1>
                    </div>
                    <div class="col-sm-6 px-4">
                        <p class=" text-danger"><b><small>Request</small></b></p>
                        <h2 class="text-uppercase">How to make a Request?</h2>
                        <p class="text-uppercase text-dark">
                            <big>
                            First, You have to create an account in our website.For creating new account, you need to give some information. Then , You have go to 'Request' option and give the information which is asked.Finally, you can post for Request.
                            </big>
                        </p>
                        <a href="/request" class="btn btn-light donate-button">Make a Request</a>

                    </div>
                    <div class="col-sm-6 text-center">
                        <img class="request-image" src="images/request.png" alt="" />
                    </div>



                </div>

            </div>

            
            <Faq />




        </div>
    );
};

export default Home;