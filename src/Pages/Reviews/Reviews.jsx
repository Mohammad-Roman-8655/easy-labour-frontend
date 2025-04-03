import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Reviews() {
   const [Reviews,setReviews]=useState([]);
    const fetchReviews = async () => {
      try {
          const response= await fetch("http://localhost:3000/api/reviews");
          const data= await response.json();
          setReviews(data);
      } catch (error) {
         console.error("Error : ",error);
      }
    }
    useEffect(() => {
      fetchReviews();
    },[]);
  return (
    <div className='w-full my-5 bg-blue-50 p-5'>
    <div className='w-full lg:w-4/5 p-5 mx-auto'>
      <h1 className='text-2xl lg:text-4xl font-bold text-center mb-5 lg:mb-10 text-blue-500'>What People Say About Us</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 lg:mb-10'>
      {
  Reviews.map((Review, idx) => {
    return (
      <div key={idx} className='mx-auto border-2 p-3 rounded-xl'>
        <p className='mb-3'>{Review.comment}</p>
        
        {/* Star Rating Section */}
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Review.rating ? 'text-yellow-500' : 'text-gray-300'}>
              ★
            </span>
          ))}
        </div>

        <div className='flex gap-3 items-center'>
          <img className='w-10 h-10 rounded-full' src={Review.reviewerImage} alt={Review.reviewerName} />
          <div>
            <h1 className='text-blue-600 font-semibold'>{Review.reviewerName}</h1>
            <p>{Review.reviewerPosition}</p>
          </div>
        </div>
      </div>
    );
  })
}

      </div>
     
    </div>
  </div>
  )
}

export default Reviews