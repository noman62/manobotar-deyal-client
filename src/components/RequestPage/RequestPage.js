import React from 'react'

const RequestPage = () => {
  return (
    <div>
      <div class='container-fluid donate-main  d-flex justify-content-center align-items-center '>
        <div class='row  '>
          <div class='col-sm-12 text-center  '>
            <h1 class='text-uppercase pb-4'>
              MAKE A <b>Request</b>
            </h1>
            <h3 class='text-uppercase'>How to make a Request?</h3>
            <p class=' w-75 mx-auto'>
              First, You have to create an account in our website.For creating
              new account, you need to give some information. Then , You have go
              to 'Request' option and give the information which is
              asked.Finally, you can post for Request
            </p>
            <a class='btn btn-primary px-4 create-button' href='/request'>
              Make Your Request
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestPage
