import React from 'react'
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <>
    <div className='w-full mt-10 bg-blue-600 text-white'>
  <div className='w-full'>
    <img className='w-full' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736838469/adzgna0bnkiocyghuwkj.svg" alt="footer-img" />
  </div>
  <div className='w-full flex flex-col lg:flex-row p-10'>
    <div className='flex flex-col w-full lg:w-1/3 p-5'>
      <div className='flex gap-3 mb-5'>
        <img className='h-16 w-16' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736589644/pgbbuyig6p9yvkj3qbvk.png" alt="Labour-logo" />
        <h1 className='text-3xl font-bold my-auto'>EASY LABOUR</h1>
      </div>
      <p className='text-justify mb-5'>Transforming the construction industry by seamlessly connecting skilled, semi-skilled, and unskilled workers with construction projects across the nation.</p>
      <div className='flex gap-3'>
        <a href="/facebook"><i className="fa-brands fa-facebook"></i></a>
        <a href="/twitter"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="/instagram"><i className="fa-brands fa-instagram"></i></a>
        <a href="/linkedin"><i className="fa-brands fa-linkedin"></i></a>
        <a href="/youtube"><i className="fa-brands fa-youtube"></i></a>
      </div>
    </div>
    <div className='flex flex-col w-full lg:w-1/3 p-5 pl-0 lg:pl-10'>
      <NavLink className="hover:underline font-medium" to="/About">About us</NavLink>
      <NavLink className="hover:underline font-medium" to="/Contact">Contact us</NavLink>
      <NavLink className="hover:underline font-medium" to="/Services">Media</NavLink>
      <NavLink className="hover:underline font-medium" to="/Jobs">Jobs</NavLink>
      <NavLink className="hover:underline font-medium" to="/Services">Business</NavLink>
      <NavLink className="hover:underline font-medium" to="/Labours">Worker</NavLink>
      <NavLink className="hover:underline font-medium" to="/PrivacyAndPolicy">Terms & Conditions</NavLink>
      <NavLink className="hover:underline font-medium" to="/PrivacyAndPolicy">Privacy Policy</NavLink>
      <NavLink className="hover:underline font-medium" to="/PrivacyAndPolicy">Cancellation Policy</NavLink>
      <NavLink className="hover:underline font-medium" to="/PrivacyAndPolicy">Refund Policy</NavLink>
      <NavLink className="hover:underline font-medium" to="/PrivacyAndPolicy">Disclaimer</NavLink>
    </div>
    <div className='flex flex-col w-full lg:w-1/3 p-5'>
      <div className='mb-4'>
        <h1 className='text-xl font-bold mb-3'>Corporate address</h1>
        <p>Khushalganj Mohan road kakori Lucknow, Uttar Pradesh, India 226101</p>
      </div>
      <div className='mb-4'>
        <h1 className='mb-3 text-xl font-bold'>Registered address</h1>
        <p>Khushalganj Mohan road kakori Lucknow, Uttar Pradesh, India 226101</p>
      </div>
      <div className='flex flex-wrap gap-3'>
        <div className='flex gap-2 items-center'>
          <i className="fa-solid fa-phone border-2 p-1 rounded-full text-lg"></i>
          <div>
            <p className='font-semibold'>Phone</p>
            <p>+91 6386663632</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <i className="fa-solid fa-at border-2 p-1 rounded-full text-lg"></i>
          <div>
            <p className='font-semibold'>Email</p>
            <p>info@easylabour.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='w-full p-5 bg-blue-700'>
    <p className='text-center text-sm'>Copyright © 2025. All rights reserved to Easy Labour.</p>
  </div>
</div>
    </>
  )
}

export default Footer