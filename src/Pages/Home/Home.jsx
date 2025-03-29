import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

import NavBarMain from '../../Components/NavBarComp/NavBarMain'


function Home() {
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
  const data=[
    {
      message:"As a labourer, I've had a lot of luck finding work through Digital Labour Chowk. The app is user-friendly, and I've been able to connect with clients who need my skills. It's a great platform.",
      name:"Shyam Lal",
      category:"Labour",
      profile:"https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736836919/p5ngbdqm90ilrmjddzzf.jpg"

    },
    {
      message:"As a labourer, I've had a lot of luck finding work through Digital Labour Chowk. The app is user-friendly, and I've been able to connect with clients who need my skills. It's a great platform.",
      name:"Shyam Lal",
      category:"Labour",
      profile:"https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736836919/p5ngbdqm90ilrmjddzzf.jpg"

    },
    {
      message:"As a labourer, I've had a lot of luck finding work through Digital Labour Chowk. The app is user-friendly, and I've been able to connect with clients who need my skills. It's a great platform.",
      name:"Shyam Lal",
      category:"Labour",
      profile:"https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736836919/p5ngbdqm90ilrmjddzzf.jpg"

    },
    {
      message:"As a labourer, I've had a lot of luck finding work through Digital Labour Chowk. The app is user-friendly, and I've been able to connect with clients who need my skills. It's a great platform.",
      name:"Shyam Lal",
      category:"Labour",
      profile:"https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736836919/p5ngbdqm90ilrmjddzzf.jpg"

    },
    {
      message:"As a labourer, I've had a lot of luck finding work through Digital Labour Chowk. The app is user-friendly, and I've been able to connect with clients who need my skills. It's a great platform.",
      name:"Shyam Lal",
      category:"Labour",
      profile:"https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736836919/p5ngbdqm90ilrmjddzzf.jpg"

    },
    {
      message:"As a labourer, I've had a lot of luck finding work through Digital Labour Chowk. The app is user-friendly, and I've been able to connect with clients who need my skills. It's a great platform.",
      name:"Shyam Lal",
      category:"Labour",
      profile:"https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736836919/p5ngbdqm90ilrmjddzzf.jpg"

    },
  ]
  return (
   <>
   <NavBarMain/>
   <div>
  <div className='flex flex-col lg:flex-row justify-around w-full items-center my-10 gap-5 lg:gap-0'>
    <div className='w-full lg:w-1/2 p-5 lg:p-20'>
      <h1 className='text-2xl lg:text-4xl font-bold text-blue-500 mb-5 lg:mb-10'>
        Connecting daily wage workers <br className='hidden lg:block' /> with construction companies
      </h1>
      <p className='mb-5 lg:mb-10 font-semibold'>
        Easy Labour connects companies with skilled and unskilled construction <br className='hidden lg:block' /> workers, streamlining hiring and offering workers better jobs and growth <br className='hidden lg:block' /> opportunities—empowering both businesses and laborers.
      </p>
      <div className='w-full mb-5 lg:mb-10 flex flex-wrap gap-5 items-center'>
        <NavLink className="w-full sm:w-1/3 text-lg lg:text-xl font-semibold p-2 text-center rounded-lg border-2 border-black text-white bg-blue-500 hover:underline" to="/Jobs">
          <i className="fa-solid fa-briefcase mr-1"></i>Jobs
        </NavLink>
        <NavLink className="w-full sm:w-1/3 text-lg lg:text-xl font-semibold p-2 text-center rounded-lg border-2 border-black text-white bg-blue-500 hover:underline" to="/Labours">
          <i className="fa-solid fa-helmet-safety mr-1"></i>Labours
        </NavLink>
        <NavLink className="w-full sm:w-1/3 text-lg lg:text-xl font-semibold p-2 text-center rounded-lg border-2 border-black text-white bg-blue-500 hover:underline" to="/Contractors">
          <i className="fa-solid fa-user mr-1"></i>Contractors
        </NavLink>
        <NavLink className="w-full sm:w-1/3 text-lg lg:text-xl font-semibold p-2 text-center rounded-lg border-2 border-black text-white bg-blue-500 hover:underline" to="/RentalEquipments">
          <i className="fa-solid fa-user mr-1"></i>Shops
        </NavLink>
      </div>
    </div>
    <div className='w-full lg:w-2/5'>
      <img className='rounded-2xl mx-auto' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736667682/snpwyykfdsdsznbgusk2.png" alt="labour and contractor img" />
    </div>
  </div>
  <div className='my-10 w-full bg-[#F3F5F7] h-auto text-center p-5 lg:p-10'>
    <h1 className='text-center font-bold text-blue-600 text-xl lg:text-2xl my-2'>If you want to apply for jobs</h1>
    <h1 className='text-center font-bold text-blue-600 text-xl lg:text-2xl mb-5'>click on the button given below</h1>
    <NavLink className="text-lg font-semibold text-white bg-blue-500 px-4 py-2 rounded" to="/Jobs">Get More Jobs</NavLink>
  </div>
  <div className='flex flex-col lg:flex-row gap-5 bg-[#F3F5F7] w-full p-5 lg:p-10 my-10'>
    <div className='w-full lg:w-1/2 p-5 bg-blue-100 rounded-xl'>
      <i className="fa-solid fa-helmet-safety text-6xl lg:text-8xl text-blue-500 text-center mb-5 lg:mb-10 block mx-auto"></i>
      <h1 className='text-center text-xl lg:text-2xl text-blue-500 font-bold mb-5'>Why Workers Choose Easy Labour?</h1>
      <p className='text-justify px-5 lg:px-10 mb-5'>
        Easy Labour empowers workers by offering a direct way to find jobs that match their skills, desired wages, and location. Our user-friendly app ensures easy access to job opportunities without middlemen, helping workers like carpenters, electricians, masons, and laborers secure better-paying jobs and career growth. With additional support like direct payments and access to government schemes, we ensure workers have a smoother and more secure job search experience.
      </p>
      <NavLink className="text-lg lg:text-xl text-[#FF0078] text-center block mx-auto font-bold" to="/Services">LEARN MORE <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i></NavLink>
    </div>
    <div className='w-full lg:w-1/2 p-5 bg-blue-100 rounded-xl'>
      <i className="fa-solid fa-building text-6xl lg:text-8xl text-blue-500 text-center mb-5 lg:mb-10 block mx-auto"></i>
      <h1 className='text-center text-xl lg:text-2xl text-blue-500 font-bold mb-5'>Why Companies Choose Easy Labour?</h1>
      <p className='text-justify px-5 lg:px-10 mb-5'>
        Easy Labour provides a reliable platform to find skilled, semi-skilled, and unskilled workers quickly and efficiently. With access to a large pool of over 1,00,000 verified candidates, companies can post job requirements and connect with the right talent based on skills and budget. Our platform simplifies the hiring process, making it faster, cost-effective, and more efficient, helping companies meet project deadlines without the hassle.
      </p>
      <NavLink className="text-lg lg:text-xl text-[#FF0078] text-center block mx-auto font-bold" to="/Services">LEARN MORE <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i></NavLink>
    </div>
  </div>
  <div className='w-full my-10'>
    <div className='w-full lg:w-3/4 mx-auto p-5 bg-[#FF0078] rounded-3xl'>
      <p className='text-xl lg:text-3xl font-bold text-center mx-auto text-white p-3'>Great buildings start with a strong foundation and skilled hands</p>
    </div>
  </div>
  <div className='w-full my-10'>
    <div className='flex flex-col lg:flex-row gap-5 items-center w-full lg:w-4/5 mx-auto'>
      <div className='w-full lg:w-1/2 p-5'>
        <h1 className='text-3xl lg:text-5xl text-blue-500 font-bold mb-5 p-3'>What is Easy Labour?</h1>
        <p className='mb-2 p-3'>
          Easy Labour is your one-stop solution for construction manpower. We connect construction companies and contractors with a vast pool of skilled, semi-skilled, and unskilled daily wage workers across India. Our platform streamlines the hiring process, saving your valuable time and resources. Find the perfect workers for your project, ensuring it’s completed on time and within budget. With Easy Labour, you gain access to a reliable workforce and can focus on delivering exceptional results.
        </p>
        <p className='mb-5 p-3'>
          With our network of 150k+ daily wage unskilled, semi-skilled and skilled workers across India, we are committed to streamlining the process of connecting blue collar workers with construction companies.
        </p>
        <NavLink className="text-lg lg:text-xl text-[#FF0078] text-center block mx-auto font-bold" to="/Services">LEARN MORE <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i></NavLink>
      </div>
      <div className='w-full lg:w-1/2 p-5'>
        <img className='rounded-2xl mx-auto' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736835032/krgxcvxzqmykc9j34dbd.jpg" alt="three-labour-img" />
      </div>
    </div>
  </div>
  <div className='w-full my-10 bg-blue-50 p-5'>
    <div className='w-full lg:w-4/5 p-5 mx-auto'>
      <h1 className='text-2xl lg:text-4xl font-bold text-center mb-5 lg:mb-10 text-blue-500'>What People Say About Us</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 lg:mb-10'>
        {
          Reviews.map((Review, idx) => {
            return (
              <div key={idx} className='mx-auto border-2 p-3 rounded-xl'>
                <p className='mb-3'>{Review.comment}</p>
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
      <NavLink className="text-lg lg:text-xl text-[#FF0078] text-center block mx-auto font-bold mt-5 lg:mt-11" to="/Reviews">READ MORE <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i></NavLink>
    </div>
  </div>
</div>
   
   </>
  )
}

export default Home