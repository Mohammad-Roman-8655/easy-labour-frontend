
import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

function Faq({title,desc}) {
    const [open,setOpen]=useState(false);
  return (
    <div>
       
        <div className="faq_main container mx-auto px-5 lg:max-w-6xl md:max-w-6xl text-black">
            <div className="">
                <div className="main top bg-white hover:text-blue-600 hover:bg-gray-50 border-2 rounded flex justify-between items-center px-4 py-3 mb-2 cursor-pointer" onClick={()=>{setOpen(!open)}}>
                    <div className="left">
                        <h1 className='lg:text-xl md:text-xl text-xl '>{title}</h1>
                        
                    </div>
                    <div className="right">
                    {
                        open ? <AiOutlineMinus className='lg:text-2xl md:text-2xl text-2xl'/>
                        :<AiOutlinePlus className='lg:text-2xl md:text-2xl text-2xl'/>
                        
                    }
                    </div>
                </div>
                { open && <div className="main bottom px-5 py-5 my-[1px] border-2 bg-blue-100 text-black  mb-3 ">
                    <p className=' text-2xl lg:text-start md:text-start text-justify cursor-pointer  '>{desc}</p>

                </div>}
            </div>
        </div>
    </div>
  )
}

export default Faq