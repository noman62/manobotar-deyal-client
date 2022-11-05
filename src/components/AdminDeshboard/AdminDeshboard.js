import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'
import AllDonation from '../AllDonation/AllDonatoin'
import AllRequest from '../AllRequest/AllRequest'
import Test from '../Test/Test'
import UserDonation from '../UserDonation/UserDonation'
import UserRequest from '../UserRequest/UserRequest'

const AdminDeshboard = () => {
 

  const user = useSelector(selectUser)

 

  return (
    <div>
      <div class='pill2'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12'>
              <nav>
                <div class='nav nav-tabs' id='nav-tab' role='tablist'>
                  <a
                    class='nav-item nav-link active'
                    id='nav-admin-profile-tab'
                    data-toggle='tab'
                    href='#nav-admin-profile'
                    role='tab'
                    aria-controls='nav-admin-profile'
                    aria-selected='true'
                  >
                    Profile
                  </a>

                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <a
                        class='nav-item nav-link'
                        id='nav-donate-list-tab'
                        data-toggle='tab'
                        href='#nav-donate-list'
                        role='tab'
                        aria-controls='nav-donate-list'
                        aria-selected='false'
                      >
                        Donate List
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-request-list-tab'
                        data-toggle='tab'
                        href='#nav-request-list'
                        role='tab'
                        aria-controls='nav-request-list'
                        aria-selected='false'
                      >
                        User List
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-user-list-tab'
                        data-toggle='tab'
                        href='#nav-user-list'
                        role='tab'
                        aria-controls='nav-user-list'
                        aria-selected='false'
                      >
                        All Request List
                      </a>
                    </>
                  )}
                  {user !== null && user.user && user.user.role === 'user' && (
                    <>
                      <a
                        class='nav-item nav-link'
                        id='nav-donate-list-tab'
                        data-toggle='tab'
                        href='#nav-donate-list'
                        role='tab'
                        aria-controls='nav-donate-list'
                        aria-selected='false'
                      >
                        Donate List
                      </a>
                     
                      <a
                        class='nav-item nav-link'
                        id='nav-user-list-tab'
                        data-toggle='tab'
                        href='#nav-user-list'
                        role='tab'
                        aria-controls='nav-user-list'
                        aria-selected='false'
                      >
                        Request List
                      </a>
                    </>
                  )}
                </div>
              </nav>
              <div class='tab-content text-center m-4' id='nav-tabContent'>
                <div
                  class='tab-pane fade show active'
                  id='nav-admin-profile'
                  role='tabpanel'
                  aria-labelledby='nav-admin-profile-tab'
                >
                  <img
                    class='user-deshboard-image'
                    src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                    alt=''
                    srcset=''
                  />
                  <table class='table'>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>{user?.user?.name}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{user?.user?.email}</td>
                      </tr>
                      <tr>
                        <th>mobile</th>
                        <td>{user?.user?.mobile}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{user?.user?.address}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-donate-list'
                  role='tabpanel'
                  aria-labelledby='nav-donate-list-tab'
                >
                  <h3>Donation List</h3>

                  {user !== null && user.user && user.user.role === 'user' && (
                    <>
                      <UserDonation/>
                    </>
                  )}

                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <AllDonation/>
                    </>
                  )}
                   
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-request-list'
                  role='tabpanel'
                  aria-labelledby='nav-request-list-tab'
                >
                  <h3>User List</h3>
                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <Test />
                    </>
                  )}
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-user-list'
                  role='tabpanel'
                  aria-labelledby='nav-user-list-tab'
                >
                  <h3>Request List</h3>

                  {user !== null && user.user && user.user.role === 'user' && (
                    <>
                      <UserRequest />
                    </>
                  )}

                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <AllRequest />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDeshboard
