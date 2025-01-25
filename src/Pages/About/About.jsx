import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
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
    <div className='w-[100%]'>
      <div className='w-[100%]'>
        <div className=' w-[90%] flex gap-5 items-center mx-auto my-5  rounded-xl bg-gray-50'>
          <div className='w-[60%] pl-20'>
            <p className='text-[13px] mb-3 font-bold '><span className='text-[#FF0078]'>HOME </span>&gt; ABOUT</p>
            <h1 className='text-5xl text-blue-600 mb-5 font-bold'>About Easy Labour</h1>
            <p>Welcome to Easy Labour, where we revolutionize the hiring process by connecting businesses with skilled blue-collar workers and professionals through our innovative platform.</p>
          </div>
          <div className='w-[40%]  p-10'>
            <img className='rounded-2xl ' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737013107/zzqsqz1h4956yjcx6kki.jpg" alt="single-labour-img" />
          </div>
        </div>
        <div className='w-[90%] flex gap-5 mx-auto my-20 items-center '>
          <div className='w-[60%] p-10'>
            <h1 className='text-5xl text-blue-600 font-bold mb-10'>From vision to reality</h1>
            <p className='my-5'>Easy Labour started in 2025 with a vision to transform the hiring landscape for the construction industry. Our founder, Mohammad Roman, recognized the challenges that both businesses and job seekers face—employers struggle to find skilled, reliable workers, while job seekers find it difficult to secure stable opportunities.</p>
            <p className='mb-5'>With a mission to bridge this gap, we built a user-friendly platform that directly connects companies with skilled workers, ensuring transparency, timely payments, and equal opportunities for all. Our focus is on empowering blue-collar workers, simplifying the hiring process, and bringing stability to thousands of families across India.</p>
            <p className='mb-5'>From idea to execution, our journey has been driven by a commitment to innovation, social impact, and a belief that every worker deserves a fair chance. Today, Easy Labour is more than just a platform; it’s a community that helps workers and businesses grow togethe</p>
          </div>
          <div className='w-[40%] mt-[12%]'>
            <img className='rounded-2xl' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737014830/bigfzkrjxkrovfolwmxi.jpg" alt="team-img" />
          </div>
        </div>
        <div className='w-[100%] flex justify-around my-20 p-10 bg-blue-500 rounded-bl-3xl rounded-br-3xl text-white'>
          <div className='flex flex-col items-center p-2'>
            <h1 className='text-3xl mb-2 opacity-90 font-bold'>100,000+</h1>
            <p className='tex-2xl font-bold'>Registered workers</p>
          </div>
          <div className='flex flex-col items-center p-2'>
          <h1 className='text-3xl mb-2 opacity-90 font-bold'>3,500+</h1>
          <p className='tex-2xl font-bold'>Customers</p>
          </div>
          <div className='flex flex-col items-center p-2'>
          <h1 className='text-3xl mb-2 opacity-90 font-bold'>15+</h1>
          <p className='tex-2xl font-bold'>Total Skills</p>
          </div>
          <div className='flex flex-col items-center p-2'>
          <h1 className='text-3xl mb-2 opacity-90 font-bold'>1000+</h1>
          <p className='tex-2xl font-bold'>Daily Jobs</p>
          </div>
          <div className='flex flex-col items-center p-2'>
          <h1 className='text-3xl mb-2 opacity-90 font-bold'>27+</h1>
          <p className='tex-2xl font-bold'>States Available</p>
          </div>

        </div>
        <div className='w-[100%] bg-gray-50 my-20 p-10'>
          <h1 className='text-center text-4xl text-blue-600 mb-10 font-bold'>Building a Better Future for Workers and Companies</h1>
          <div className='flex gap-5 items-center w-[95%] mx-auto mt-5 bg-blue-50 p-10 rounded-3xl'>
            <div className='w-[50%]'>
              <h1 className='text-2xl font-bold text-blue-600 mb-5'>OUR MISSION</h1>
              <p>To empower blue-collar workers by providing seamless access to job opportunities and supporting employers in finding skilled labor quickly and efficiently.</p>
            </div>
            <div className='w-[50%]'>
              <h1 className='text-2xl font-bold text-blue-600 mb-5'>OUR VISION</h1>
              <p>To create an ecosystem where daily wage earners, especially in the construction sector, have consistent job access, while businesses benefit from a reliable, verified workforce.</p>
            </div>
          </div>
        </div>
        <div className='w-[100%] my-20 p-5'>
          <h1 className='text-center text-5xl text-blue-600 font-bold mb-14'>Our Values</h1>
          <div className='flex justify-around items-center'>
            <div className='flex flex-col items-center p-5 w-[25%]'>
                <img className='w-[35%] mb-5' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737022528/hgjmupt9yzqdnwovbnzj.png" alt="Innovation-img" />
                <h1 className='text-2xl font-bold text-blue-600 mb-5'>Innovation</h1>
                <p className='text-center'>We continuously strive to improve our Platform.</p>
            </div>
            <div className='flex flex-col items-center p-5 w-[25%]'>
              <img className='w-[35%] mb-5' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737022624/b644co8mrh4g81sglarq.png" alt="Excellence-img" />
              <h1 className='text-2xl font-bold text-blue-600  mb-5'>Excellence</h1>
              <p className='text-center'>We are committed to providing the highest quality service.</p>
            </div>
            <div className='flex flex-col items-center p-5 w-[25%]'>
              <img className='w-[35%] mb-5  ' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737022674/wdnk4z6phjzieetebylb.png" alt="Integrity-img" />
              <h1 className='text-2xl font-bold text-blue-600 mb-5'>Integrity</h1>
              <p className='text-center'>We operate with transperancy and honesty.</p>
            </div>
            <div className='flex flex-col items-center p-5 w-[25%]'>
              <img className='w-[35%] mb-5' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737022714/hxfzs5a6w1ruteew3ofa.png" alt="Community-img" />
              <h1 className='text-2xl font-bold text-blue-600 mb-5'>Community</h1>
              <p className='text-center'>We foster a supportive, inclusive community.</p>
            </div>
          </div>
        </div>
        <div>
        <div className='w-[100%] my-10 p-5'>
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
        </div>
      </div>
      

    </div>
  )
}

export default About