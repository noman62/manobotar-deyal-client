import axios from 'axios';
import React, { useState } from 'react';
import DonateForm from '../DonateForm/DonateForm';
import RequestForm from '../RequestForm/RequestForm';
const UserDeshboard = () => {

  return (
    <div>
      <div class="pills">
        <div class="container ">
          <div class="row">
            <div class="col-sm-12">
              <nav>
                <div class="nav nav-tabs " id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="true">Profile</a>
                  {/* <a class="nav-item nav-link" id="nav-edit-profile-tab" data-toggle="tab" href="#nav-edit-profile" role="tab" aria-controls="nav-edit-profile" aria-selected="false">Edit Profile</a> */}
                  <a class="nav-item nav-link" id="nav-donate-tab" data-toggle="tab" href="#nav-donate" role="tab" aria-controls="nav-donate" aria-selected="false">Donate</a>
                  <a class="nav-item nav-link" id="nav-request-tab" data-toggle="tab" href="#nav-request" role="tab" aria-controls="nav-request" aria-selected="false">Request</a>
                </div>
              </nav>
              <div class="tab-content text-center" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <img class="user-deshboard-image" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" srcset="" />
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>BISMOY</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>BISMOY@gmail.com</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>0180000000</td>
                      </tr>
                      <tr>
                        <th>NID Number</th>
                        <td>1234567</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>Lorem ipsum dolor sit amet. </td>
                      </tr>
                    </tbody>
                  </table>


                </div>
                <div class="tab-pane fade" id="nav-edit-profile" role="tabpanel" aria-labelledby="nav-edit-profile-tab">
                  <form class="p-4">
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputfname">First Name</label>
                        <input type="text" class="form-control" required id="inputfname" placeholder="First Name" />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputlname">Last Name</label>
                        <input type="text" class="form-control" id="inputlname" required placeholder="Last Name" />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputphoneNumber">Phone Number</label>
                        <input type="tel" class="form-control" id="inputphoneNumber" required placeholder="Phone Number" />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputnid">NID No</label>
                        <input type="text" class="form-control" id="inputnid" required placeholder="NID No" />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" required placeholder="Email" />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input required type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">Address</label>
                      <input required type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>


                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Edit Profile</button>
                  </form>
                </div>
                <div class="tab-pane fade" id="nav-donate" role="tabpanel" aria-labelledby="nav-donate-tab">
                  <DonateForm />
                </div>
                <div class="tab-pane fade p-4" id="nav-request" role="tabpanel" aria-labelledby="nav-request-tab">
                  <RequestForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeshboard;