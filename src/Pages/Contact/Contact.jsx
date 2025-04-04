import React from 'react'
import Faq from './Faq'

function Contact() {
  const faqData = [
    {
      index: 1,
      title: "What is EasyLabour?",
      description: "EasyLabour is a platform that connects laborers, contractors, shopkeepers, equipment renters, and companies for construction and related services."
    },
    {
      index: 2,
      title: "How can I register as a labourer or contractor?",
      description: "You can register by filling out the sign-up form on the website and selecting your role as Labourer or Contractor."
    },
    {
      index: 3,
      title: "Can I rent construction equipment through EasyLabour?",
      description: "Yes, EasyLabour offers a dedicated Rental Equipment section where you can browse and contact rental providers."
    },
    {
      index: 4,
      title: "How do I find labourers in my area?",
      description: "Use the location filters to select your state and district to view available labourers near you."
    },
    {
      index: 5,
      title: "Is there a way to connect with shopkeepers for construction materials?",
      description: "Yes, EasyLabour includes a 'Connect Shopkeeper' feature to help you find material suppliers in your region."
    },
    {
      index: 6,
      title: "Can companies post job opportunities?",
      description: "Yes, companies can register and post job openings to hire laborers or contractors through the platform."
    },
    {
      index: 7,
      title: "Is there any cost for using EasyLabour?",
      description: "Most of the services are free to use. Some premium features or highlighted listings may involve a small fee."
    },
    {
      index: 8,
      title: "How do I contact a service provider directly?",
      description: "Each listing includes phone and WhatsApp icons to allow direct contact with the provider."
    },
    {
      index: 9,
      title: "Can I leave reviews for services?",
      description: "Yes, registered users can leave reviews for shops, labourers, and other services they have used."
    },
    {
      index: 10,
      title: "How is my data protected on EasyLabour?",
      description: "We take data privacy seriously. All user information is stored securely and is not shared without consent."
    }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted sucessfully.We will contact with you soon.")
  };
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
          <form onSubmit={handleSubmit}>
          <div className='w-[100%]'>
            <div className='flex  w-[100%] mb-10 '>
              <div className='flex flex-col items-center w-[50%]'>
                <label className='w-[80%] mb-2 font-semibold' htmlFor="name">Your Name <span className='text-red-600 font-semibold'>*</span></label>
                <input name='name' className='w-[80%] border-2 p-3 hover:border-blue-600 rounded-xl ' placeholder='Enter Your Name' type="text" />
              </div>
              <div className='flex flex-col items-center  w-[50%]'>
                <label className='w-[80%] mb-2 font-semibold' htmlFor="phoneNum">Phone Number <span className='text-red-600 font-semibold'>*</span></label>
                <input name='phoneNum' className='w-[80%] border-2 p-3 hover:border-blue-600 rounded-xl' placeholder='Enter Phone Number' type="number" />
              </div>
            </div>
            <div className='w-[90%] flex flex-col items-center my-10 mx-auto '>
              <label className='w-[100%] mx-auto mb-3 font-semibold' htmlFor="message">Your Message <span className='text-red-600 font-semibold'>*</span></label>
              <textarea name="message" className='w-[100%] h-[200px] border-2 hover:border-blue-600 rounded-xl p-5' placeholder='Write Your Message here...'  id="" ></textarea>
              
            </div>
            <button type="submit" className='text-lg p-3 border-2 rounded-2xl items-start bg-blue-600 ml-10 text-white font-semibold'>BOOK APPOINTMENT</button>
           
          </div>
          </form>
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