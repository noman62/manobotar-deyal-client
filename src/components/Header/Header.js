import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const user = useSelector(selectUser)
  
  const history = useHistory()

  return (
    <div>
      <nav class='navbar navbar-expand-lg fixed-top navbar-light bg-white '>
        <a class='navbar-brand' href='/home'>
          মানবতার দেওয়াল
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav m-auto d-flex '>
            <li class='nav-item px-3 active'>
              <a class='nav-link' href='/home'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item px-3'>
              <a class='nav-link' href='/donatepage'>
                Donate
              </a>
            </li>
            <li class='nav-item px-3'>
              <a class='nav-link' href='/requestpage'>
                Request
              </a>
            </li>
            <li class='nav-item px-3'>
              <a class='nav-link' href='/faq'>
                Contact Us
              </a>
            </li>
           
          </ul>
          {user === null && (
            <div class=' my-2 my-lg-0'>
              <a class='px-4 log-button' href='/login'>
                Log In
              </a>

              <a class='btn  px-4 button' href='/signUp'>
                Create Account
              </a>
            </div>
          )}
           {user !== null && user.user && (
                  <>
                  <a href="admindeshboard">{user?.user?.name}</a>
                  {/* <button 
                  onClick={e => handleLogout(e)}
                  type="button" class="btn btn-primary ml-2">Log Out</button> */}
                  </>
                )}
        </div>
      </nav>
    </div>
  )
}

export default Header
