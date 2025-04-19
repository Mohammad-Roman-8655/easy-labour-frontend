import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { API_URL } from "../../config/apiConfiq";

function AddReview() {
    const navigate = useNavigate();
  const [newReview, setNewReview] = useState({
    reviewerName: "",
    reviewerPosition: "",
    reviewerImage: "",
    rating: 1,
    comment: "",
  
  });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };
  const token = localStorage.getItem("token");
  const handleAddReview = async () => {
    if(!token) {
      toast.error("Please Login to Add Review")
      navigate("/Login")
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        alert("Review added successfully!");
        navigate("/Reviews");
      } else {
        alert("Failed to add Review.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddReview();
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Add a Review</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          name="reviewerName"
          value={newReview.reviewerName}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
          required
        />

        {/* Position Selector */}
        <select
          name="reviewerPosition"
          value={newReview.reviewerPosition}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        > 
          <option value="Labour">Labour</option>
          <option value="User">User</option>
          <option value="Contractor">Contractor</option>
          <option value="Company">Company</option>
        </select>

        {/* Image URL Input */}
        <input
          type="text"
          name="reviewerImage"
          value={newReview.reviewerImage}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="w-full p-3 border rounded-lg"
        />

        {/* Star Rating */}
        <div className="flex items-center justify-between">
          <span className="font-semibold">Rating:</span>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`text-2xl ${newReview.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Comment Box */}
        <textarea
          name="comment"
          value={newReview.comment}
          onChange={handleChange}
          placeholder="Write your review..."
          className="w-full p-3 border rounded-lg h-24"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default AddReview;
