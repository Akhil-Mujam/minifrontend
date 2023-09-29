import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Display = () => {
    
    
    const [arr,setarr] = useState([])
    useEffect(() =>{
        if(!localStorage.getItem('token'))
        {
          window.location='/auth/login'
        }
        const tk = localStorage.getItem('token')
        const url = "http://localhost:5000/getDetails/"+tk;
        axios.get(url).then(
            (res) =>{
                console.log(res.data)
                setarr(res.data)
                console.log(arr)
            }
        )
       
    },[])
  return (
    <div>
      



      <center><p className="text-4xl text-green-900">Get all your History Here</p></center>
        <div className="container mx-auto mt-7 px-4   py-8 ">
        <table className="w-full text-sm text-center shadow ring-1 ring-black ring-opacity-5 text-gray-900 divide-y divide-gray-300 md:rounded-lg">
          <thead className="text-xs text-center  text-gray-900 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3  text-sm font-semibold text-gray-900 text-center">
                Train No
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Train Name
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Departue Time
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Price
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Seats Available
              </th>
             
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => (
              <tr key={index} className="bg-white ">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {/* {item.trainNumber} */}
                  {item.age}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {/* {item.trainName} */}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                  {/* {item.departureTime.Hours + "Hours" + item.departureTime.Minutes + " Minutes"} */}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                   {/* {item.price.AC + " for AC seats" + item.price.sleeper + " for Sleeper"} */}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                   {/* {item.seatsAvailable.AC + "IN AC "+item.seatsAvailable.sleeper + " in Sleeper"} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>








    </div>
  )
}

export default Display
 