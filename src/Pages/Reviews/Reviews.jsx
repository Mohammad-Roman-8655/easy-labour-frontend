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
    <div className="w-full my-5 bg-blue-50 px-4 py-8">
    <div className="w-full lg:w-4/5 mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-blue-500">
        What People Say About Us
      </h1>
  
      <div className="flex justify-end mb-6">
        <NavLink
          to="/AddReview"
          className="text-white font-bold px-5 py-2 bg-blue-500 border-2 border-black rounded-md hover:underline text-sm sm:text-base"
        >
          Add Review
        </NavLink>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Reviews.map((review, idx) => (
          <div
            key={idx}
            className="w-full h-full border-2 p-5 rounded-xl shadow hover:shadow-lg transition duration-300 bg-white"
          >
            <p className="mb-4 text-gray-700">{review.comment}</p>
  
            {/* Star Rating */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>
  
            {/* Reviewer Info */}
            <div className="flex gap-3 items-center">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={review.reviewerImage}
                alt={review.reviewerName}
              />
              <div>
                <h2 className="text-blue-600 font-semibold text-sm sm:text-base">{review.reviewerName}</h2>
                <p className="text-xs sm:text-sm text-gray-600">{review.reviewerPosition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Reviews