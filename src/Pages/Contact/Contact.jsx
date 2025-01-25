import React from 'react'
import Faq from './Faq'

function Contact() {
  const faqData = [
    {
      index: 1,
      title: "What is the fee structure?",
      description: "Our fee structure varies by grade. Please visit the fee section on our website for details."
    },
    {
      index: 2,
      title: "What subjects are taught in primary grades?",
      description: "You can enroll by filling out the admission form available on our website or at the office."
    },
    {
      index: 3,
      title: "How do I contact the school office?",
      description: "Yes, we offer sports, music, arts, and other activities for holistic development."
    },
    {
      index: 4,
      title: "How do I contact the school office?",
      description: "You can enroll by filling out the admission form available on our website or at the office."
    },
    {
      index: 5,
      title: "How do I contact the school office?",
      description: "You can contact the office via email or by calling the provided phone number during office hours."
    },
    {
      index: 6,
      title: "How are parent-teacher meetings conducted?",
      description: "Our fee structure varies by grade. Please visit the fee section on our website for details."
    },
    {
      index: 7,
      title: "What are the school timings?",
      description: "We provide healthy and nutritious meals at the cafeteria, available for purchase."
    },
    {
      index: 8,
      title: "How do I contact the school office?",
      description: "You can contact the office via email or by calling the provided phone number during office hours."
    },
    {
      index: 9,
      title: "What is the fee structure?",
      description: "Our fee structure varies by grade. Please visit the fee section on our website for details."
    },
    {
      index: 10,
      title: "How can I enroll my child?",
      description: "We provide healthy and nutritious meals at the cafeteria, available for purchase."
    }
  ];
  
  return (
    <div>
    <div className='w-[100%] p-5 '>
      <h1 className='text-center text-4xl text-white my-10 p-5 font-semibold bg-blue-600'>Contact Us</h1>
      <div className='flex items-center w-[100%] m-10'>
        <div className='w-[40%] p-5 bg-pink-50 rounded-2xl  '>

          <div className='text-left m-5'>
          <i className="fa-solid fa-phone text-3xl font-bold text-pink-500 mb-3"></i>
          <h1 className='text-blue-600 font-semibold text-2xl mb-3'>Call Us</h1>
          <p className='text-lg'>+91 6386663632</p>
          </div>
          <div className='text-left m-5'>
          <i className="fa-solid fa-envelope text-3xl font-bold text-pink-500 mb-3"></i>
          <h1 className='text-blue-600 font-semibold text-2xl mb-3'>Send a message</h1>
          <p className='text-lg'>info@easylabour.com</p>
          </div>
          <div className='text-left m-5'>
          <i className="fa-solid fa-location-dot text-3xl font-bold text-pink-500 mb-3"></i>
          <h1 className='text-blue-600 font-semibold text-2xl mb-3'>Our address</h1>
          <p className='text-lg'>Khushalganj Mohan road kakori Lucknow,Uttar Pradesh 226101</p>
          </div>

        </div>
        <div className='w-[60%] m-5 p-5 ' >
          <h1 className='text-left ml-10 text-3xl mb-10 text-blue-600 font-bold'>Book your visit at our office</h1>
          <div className='w-[100%]'>
            <div className='flex  w-[100%] mb-10 '>
              <div className='flex flex-col items-center w-[50%]'>
                <label className='w-[80%] mb-2 font-semibold' htmlFor="">Your Name <span className='text-red-600 font-semibold'>*</span></label>
                <input className='w-[80%] border-2 p-3 hover:border-blue-600 rounded-xl ' placeholder='Enter Your Name' type="text" />
              </div>
              <div className='flex flex-col items-center  w-[50%]'>
                <label className='w-[80%] mb-2 font-semibold' htmlFor="">Phone Number <span className='text-red-600 font-semibold'>*</span></label>
                <input className='w-[80%] border-2 p-3 hover:border-blue-600 rounded-xl' placeholder='Enter Phone Number' type="number" />
              </div>
            </div>
            <div className='w-[90%] flex flex-col items-center my-10 mx-auto '>
              <label className='w-[100%] mx-auto mb-3 font-semibold' htmlFor="">Your Message <span className='text-red-600 font-semibold'>*</span></label>
              <textarea className='w-[100%] h-[200px] border-2 hover:border-blue-600 rounded-xl p-5' placeholder='Write Your Message here...' name="" id="" ></textarea>
              
            </div>
            <button className='text-lg p-3 border-2 rounded-2xl items-start bg-blue-600 ml-10 text-white font-semibold'>BOOK APPOINTMENT</button>
           
          </div>
        </div>
      </div>
    </div>
     
    <div className='w-[100%]'>
           <h1 className=' w-[72%] mx-auto text-3xl font-bold text-blue-600 my-5'>Frequently Asked Question's</h1>
         
        <div className=''>
          {faqData.map((item,index)=>{
            const {title,description}=item;
            return(
              <Faq id={index} title={title} desc={description}/>
            )
          })}
        </div>
        </div>
       
      
    </div>
  )
}

export default Contact