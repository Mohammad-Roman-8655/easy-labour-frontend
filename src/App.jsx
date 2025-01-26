import React from "react"
import { BrowserRouter,Route,Routes} from "react-router-dom"

import NavBar from "./Components/NavBarComp/navBar"
import Home from  "./Pages/Home/Home"
import Services from "./Pages/Services/Services"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Login/Signup"
import AddProfile from "./Pages/AddProfile/AddProfile"
import AddJobs from "./Pages/AddProfile/AddJobs"
import AddLabour from "./Pages/AddProfile/AddLabour"
import AddContractor from "./Pages/AddProfile/AddContractor"
import AddEquipments from "./Pages/AddProfile/AddEquipments"
import Job from "./Pages/Job/Job"
import Contractor from "./Pages/Contractor/Contractor"
import Labour from "./Pages/Labour/Labour"
import RentalEquipment from "./Pages/Rental Equipment/RentalEquipment"
import Reviews from "./Pages/Reviews/Reviews"
import Media from "./Pages/Media/Media"
import Business from "./Pages/Business/Business"
import CancellationPolicy from "./Pages/CancellationPolicy/CancellationPolicy"
import Disclaimer from "./Pages/Disclaimer/Disclaimer"
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy/PrivacyAndPolicy"
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy"
import TermsAndConditions from "./Pages/TermsAndConditons/TermsAndConditions"
import Footer from "./Components/Footer/Footer"

function App() {


  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/SignUp" element={<Signup/>}/>
    <Route path="/AddProfile" element={<AddProfile/>}/>
    <Route path="/AddJobs" element={<AddJobs/>}/>
    <Route path="/AddLabour" element={<AddLabour/>}/>
    <Route path="/AddContractor" element={<AddContractor/>}/>
    <Route path="/AddEquipments" element={<AddEquipments/>}/>
    <Route path="/Jobs" element={<Job/>}/>
    <Route path="/Labours" element={<Labour/>}/>
    <Route path="/Contractors" element={<Contractor/>}/>
    <Route path="/RentalEquipments" element={<RentalEquipment/>}/>
    <Route path="/Reviews" element={<Reviews/>}/>
    <Route path="/Media" element={<Media/>}/>
    <Route path="/Business" element={<Business/>}/>
    <Route path="/CancellationPolicy" element={<CancellationPolicy/>} />
    <Route path="/Disclaimer" element={<Disclaimer/>}/>
    <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy/>}/>
    <Route path="/RefundPolicy" element={<RefundPolicy/>}/>
    <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>

   
   </>
  )
}

export default App
