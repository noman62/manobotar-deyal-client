
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import DonatePage from './components/DonatePage/DonatePage'
import RequestPage from './components/RequestPage/RequestPage'
import AdminDeshboard from './components/AdminDeshboard/AdminDeshboard'
import SingleDonationPage from './components/SingleDonationPage/SingleDonationPage'
import SingleRequestPage from './components/SingleRequestPage/SingleRequestPage'
import UserDeshboard from './components/UserDeshboard/UserDeshboard'
import Faq from './components/Faq/Faq'
import RequestForm from './components/RequestForm/RequestForm'
import DonateForm from './components/DonateForm/DonateForm'
import RatingStar from './components/RatingStar/RatingStar'
import DonationSection from './components/DonationSection/DonationSection'
import Electronics from './components/Electronics/Electronics'
import WinterCloth from './components/WinterCloth/WinterCloth'
import Food from './components/Food/Food'
import Test from './components/Test/Test'
import RequestModal from './components/RequestModal/RequestModal'
import UserRequest from './components/UserRequest/UserRequest'
import AllRequest from './components/AllRequest/AllRequest'


function App () {
  
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/donatepage'>
            <DonatePage />
          </Route>
          <Route path='/requestpage'>
            <RequestPage />
          </Route>
          <Route path='/admindeshboard'>
            <AdminDeshboard />
          </Route>
          <Route path='/test'>
            <Test/>
          </Route>
          <Route path='/userRequest'>
           <UserRequest/>
          </Route>
          <Route path='/singledonationpage/:singleId'>
            <SingleDonationPage />
          </Route>
          <Route path='/singlerequestpage'>
            <SingleRequestPage />
          </Route>
          <Route path='/userdeshboard'>
            <UserDeshboard />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signUp'>
            <SignUp />
          </Route>
          <Route path='/faq'>
            <Faq />
          </Route>
          <Route path='/donateForm'>
            <DonateForm />
          </Route>
          <Route path='/request'>
            <RequestForm />
          </Route>

          <Route path='/electronic'>
            <Electronics />
          </Route>
          <Route path='/cloth'>
            <WinterCloth />
          </Route>
          <Route path='/food'>
            <Food />
          </Route>
          <Route path='/allrequest'>
            <AllRequest/>
          </Route>
          <Route path='/modal'>
            <RequestModal />
          </Route>
          <Route path='/star'>
            <RatingStar />
          </Route>
          <Route path='/donationSection'>
            <DonationSection />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
