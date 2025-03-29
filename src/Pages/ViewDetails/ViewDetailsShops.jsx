import React from 'react'

import { useLocation } from "react-router-dom";

function ViewDetailsShops() {
      const location = useLocation();
      const {Shop} = location.state || {}; 
     
      function formatShopTiming(openTime, closeTime) {
        const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    
        const openFormatted = new Date(openTime).toLocaleTimeString('en-US', options);
        const closeFormatted = new Date(closeTime).toLocaleTimeString('en-US', options);
    
        return `Open: ${openFormatted} to ${closeFormatted}`;
    }
  return (
  
        <div className="container mx-auto p-4 ">
    <div className="overflow-x-auto ">
      <table className="min-w-[70%] border-separate border-spacing-2 border border-gray-400  dark:border-gray-500 mx-auto ">
        <caption className='caption-top border p-4 text-2xl bg-sky-600 text-white font-semibold '>{Shop.shopName} Details</caption>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold text-center ">Shop Photo</td>
            <td className="border border-gray-300 dark:border-gray-700">
              <img src={Shop.shopImage} alt={Shop.shopName} className="h-86 w-50 mx-auto text-center " />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Name</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Shop.shopName}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700  px-5 py-4  font-semibold">Email</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4"><a href={`mailto:${Shop.email}`} className="text-blue-600 hover:underline">{Shop.email}</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Timing</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{formatShopTiming(Shop.openTime,Shop.closeTime)}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Opening Days</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Shop.daysOpen}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Phone Number</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Shop.phone}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">WhatsApp Number</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Shop.whatsapp}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Address</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Shop.address}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Description of shop :</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Shop.description}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Website Link</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4"><a className="text-blue-600 hover:underline" href={Shop.orderLink}> Order Now</a></td>
          </tr>
        
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Created At</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{new Date(Shop.createdAt).toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Updated At</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{new Date(Shop.updatedAt).toLocaleString()}</td>
          </tr>
        
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default ViewDetailsShops