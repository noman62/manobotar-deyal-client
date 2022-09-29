import React from 'react';

const DonationSection = () => {
    return (
        <div class="container-fluid donate ">
            <div class="row donate-bg1 d-flex">
                <div class="col-sm-12 pt-4">
                    <h1 class="text-center text-uppercase ">Donation Section</h1>
                </div>
                <div class="col-sm-6 text-center">
                    <img class="donate-image" src="images/donate.png" alt="" />
                </div>
                <div class="col-sm-6 px-4">
                    <p class=" text-danger"><b><small>Donation</small></b></p>
                    <h2 class="text-uppercase">How to make a Donation?</h2>
                    <p class="text-uppercase text-dark">
                        <big>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dicta quo fuga, mollitia necessitatibus eaque cupiditate aliquid sapiente nesciunt quaerat doloremque fugit debitis illo veniam officiis eligendi aperiam. Vel, quisquam!
                        </big>
                    </p>
                    <a href="/donatepage" class="btn btn-light donate-button">Make a Donation</a>

                </div>
            </div>
        </div>
    );
};

export default DonationSection;