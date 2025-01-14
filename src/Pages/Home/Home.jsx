import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
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
   <div>
    <div className='flex justify-around w-[100%] items-center my-10 gap-0' >
     
       <div className='w-[50%] p-20'>
        <h1 className='text-4xl font-bold text-blue-500  mb-10'>Connecting daily wage workers <br /> with construction companies</h1>
        <p className=' mb-10 font-semibold'>Easy Labour connects companies with skilled and unskilled construction <br /> workers, streamlining hiring and offering workers better jobs and growth <br /> opportunities—empowering both businesses and laborers.</p>
        <div className='w-[100%]  mb-10 flex gap-5 items-center'>
        <NavLink className=" w-[25%] text-xl font-semibold p-2 text-center rounded-lg border-2  border-black text-white bg-blue-500 hover:underline" to="/Jobs"><i className="fa-solid fa-briefcase mr-1"></i>Jobs</NavLink>
      <NavLink className=" w-[25%] text-xl font-semibold p-2 text-center rounded-lg border-2  border-black text-white bg-blue-500 hover:underline" to="/Labours"> <i className="fa-solid fa-helmet-safety mr-1"></i>Labours</NavLink>
      <NavLink className=" w-[27%] text-xl font-semibold p-2 text-center rounded-lg border-2  border-black text-white bg-blue-500 hover:underline" to="/Contractors"> <i className="fa-solid fa-user mr-1"></i>Contractors</NavLink>

        </div>
       </div>
       <div className='w-[40%]'>
           <img className='rounded-2xl' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736667682/snpwyykfdsdsznbgusk2.png" alt="labour and contractor img" />
       </div>

    </div>
    <div className='my-20 w-[100%] bg-[#F3F5F7] h-[200px] text-center p-10'>
      <h1 className='text-center font-bold text-blue-600 text-2xl my-2'>If you want to apply for jobs</h1>
      <h1 className='text-center font-bold text-blue-600 text-2xl mb-5'>click on the button given below</h1>
      <NavLink className="text-lg font-semibold text-white bg-blue-500 p-2 rounded " to="/Jobs">Get More Jobs</NavLink>
    </div>
    <div className='flex gap-10 bg-[#F3F5F7] w-[100%] p-10 my-10'>
       <div className='w-[50%] p-5 bg-blue-100 rounded-xl'>
       <i className="fa-solid fa-helmet-safety text-8xl text-blue-500 text-center mb-10 ml-[43%]"></i>
       <h1 className='text-center text-2xl text-blue-500 font-bold mb-5'>Why Workers Choose Easy Labour?</h1>
       <p className='text-justify px-10 mb-5'>Easy Labour empowers workers by offering a direct way to find jobs that match their skills, desired wages, and location. Our user-friendly app ensures easy access to job opportunities without middlemen, helping workers like carpenters, electricians, masons, and laborers secure better-paying jobs and career growth. With additional support like direct payments and access to government schemes, we ensure workers have a smoother and more secure job search experience.</p>
        <NavLink className="text-xl text-[#FF0078] text-center ml-[35%] font-bold " to="/Servies">LEARN MORE <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i></NavLink>
       </div>
       <div className='w-[50%] p-5 bg-blue-100 rounded-xl'>
       <i className="fa-solid fa-building text-8xl text-blue-500 text-center mb-10 ml-[45%]"></i>
       <h1  className='text-center text-2xl text-blue-500 font-bold mb-5'>Why Companies Choose Easy Labour?</h1>
       <p className='text-justify px-10 mb-5'>Easy Labour provides a reliable platform to find skilled, semi-skilled, and unskilled workers quickly and efficiently. With access to a large pool of over 1,00,000 verified candidates, companies can post job requirements and connect with the right talent based on skills and budget. Our platform simplifies the hiring process, making it faster, cost-effective, and more efficient, helping companies meet project deadlines without the hassle.</p>
       <NavLink className="text-xl text-[#FF0078] text-center ml-[35%] font-bold " to="/Services"> LEARN MORE <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i></NavLink>
       </div>
    </div>
    <div className='w-[100%] my-10'>
      <div className='w-[77%] mx-auto p-5 bg-[#FF0078] rounded-3xl'>
        <p className='text-3xl font-bold text-center mx-auto text-white p-3'>Great buildings start with a strong foundation and skilled hands</p>
      </div>
    </div>
    <div className='w-[100%] my-10'>
      <div className='flex gap-10 items-center w-[80%] mx-auto'>
         <div className='w-[50%] p-5'>
          <h1 className='text-5xl text-blue-500 font-bold mb-5 p-3'>What is Easy Labour?</h1>
          <p className='mb-2 p-3'>Easy Labour is your one-stop solution for construction manpower. We connect construction companies and contractors with a vast pool of skilled, semi-skilled, and unskilled daily wage workers across India. Our platform streamlines the hiring process, saving your valuable time and resources. Find the perfect workers for your project, ensuring it’s completed on time and within budget. With Easy Labour, you gain access to a reliable workforce and can focus on delivering exceptional results.</p>
          <p className='mb-5 p-3'>With our network of 150k+ daily wage unskilled, semi-skilled and skilled workers across India, we are committed to streamlining the process of connecting blue collar workers with construction companies.</p>
          <NavLink className="text-xl text-[#FF0078] text-center ml-[35%] font-bold " to="/Servies">LEARN MORE <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i></NavLink>
        
         </div>
         <div className='w-[50%] p-5'>
             <img className='rounded-2xl' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736835032/krgxcvxzqmykc9j34dbd.jpg" alt="three-labour-img" />
         </div>
      </div>
    </div>
    <div className='w-[100%] my-10 bg-blue-50 p-5'>
      <div className='w-[80%] p-5 mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-10 text-blue-500'>What People Say About Us</h1>
        <div className='grid grid-cols-3 gap-5 mb-10 '>
         {
          data.map((review,idx)=>{
            return(
              
              <div key={idx} className='mx-auto border-2 p-3 rounded-xl'>
  
                    <p className=' mb-3'>{review.message}</p>
                    <div className='flex gap-3 items-center'>
                      <img className='w-10 h-10 rounded-[50%]' src={review.profile} alt={review.name} />
                      <div >
                        <h1 className='text-blue-600 font-semibold'>{review.name}</h1>
                        <p >{review.category}</p>
                      </div>
                    </div>
        
                  </div>
            )
          })
         }   
        </div>
        <NavLink className="text-xl text-[#FF0078] text-center ml-[45%] font-bold mt-11" to="/Reviews">READ MORE <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i></NavLink>
      </div>
    </div>
    <div className='w-[100%] mt-10 bg-blue-600 text-white'>
      <div className='w-[100%]'>
        <img className='w-[100%]' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736838469/adzgna0bnkiocyghuwkj.svg" alt="footer-im" />
      </div>
      <div className='w-[100%] flex p-10 '>
        <div className='flex flex-col w-[33%] p-5 '>
        <div className='flex gap-3 mb-5 ' >
            <img className='h-16 w-16' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736589644/pgbbuyig6p9yvkj3qbvk.png" alt="Labour-logo" />
            <h1 className='text-3xl font-bold my-auto '>EASY LABOUR</h1>
         </div>
         <p className='text-justify mb-5'>Transforming the construction industry by seamlessly connecting skilled, semi-skilled, and unskilled workers with construction projects across the nation. </p>
         <div className='flex gap-3'>
          <a href="/facebook"><i className="fa-brands fa-facebook "></i></a>
          <a href="/twitter"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="/instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="/linkedin"><i className="fa-brands fa-linkedin"></i></a>
          <a href="/youtube"><i className="fa-brands fa-youtube"></i></a>
         </div>
        </div>
        <div className='flex flex-col w-[33%] p-5 pl-[10%] '>
          <NavLink className="hover:underline font-medium"  to="/About">About us</NavLink>
          <NavLink className="hover:underline font-medium"  to="/Contact">Contact us</NavLink>
          <NavLink className="hover:underline font-medium"  to="/Media" >Media</NavLink>
          <NavLink  className="hover:underline font-medium" to="/Jobs">Jobs</NavLink>
          <NavLink className="hover:underline font-medium"  to="/Business">Business</NavLink>
          <NavLink className="hover:underline font-medium"  to="/Labours">Worker</NavLink>
          <NavLink className="hover:underline font-medium"  to="/TermsAndConditions">Terms & Conditions</NavLink>
          <NavLink className="hover:underline font-medium"  to="/PrivacyAndPolicy">Privacy Policy</NavLink>
          <NavLink className="hover:underline font-medium"  to="/CancellationPolicy" >Cancellation Policy</NavLink>
          <NavLink className="hover:underline font-medium"  to="/RefundPolicy">Refund Policy</NavLink>
          <NavLink className="hover:underline font-medium"  to="/Disclaimer">Disclaimer</NavLink>
        </div>
        <div className='flex flex-col w-[33%] p-5 '>
          <div className='mb-4' >
            <h1 className='text-xl font-bold mb-3'>Corporate address</h1>
            <p>Khushalganj Mohan road kakori Lucknow, Uttar Pradesh, India 226101</p>
          </div>
          <div className='mb-4'>
            <h1 className='mb-3 text-xl font-bold'>Registered address</h1>
            <p>Khushalganj Mohan road kakori Lucknow, Uttar Pradesh, India 226101</p>
          </div>
          <div className='flex gap-3'>
            <div className='flex gap-2 items-center'>
            <i className="fa-solid fa-phone border-2 p-1 rounded-[50%] text-lg"></i>
            <div className=''>
              <p className='font-semibold'>Phone</p>
              <p>+91 6386663632</p>
            </div>
            </div>
             <div className='flex gap-2 items-center'>
             <i className="fa-solid fa-at border-2 p-1 rounded-[50%] text-lg"></i>
             <div className=''>
              <p className='font-semibold'>Email</p>
              <p>info@easylabour.com</p>
             </div>

             </div>
          </div>
        </div>

      </div>
    </div>
   </div>
   
   </>
  )
}

export default Home