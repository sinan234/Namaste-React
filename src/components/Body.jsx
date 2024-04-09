import Restocards from "./Restocards"
import {data as mockData} from '../utils/mockData'
import { useState } from "react"

const BodyComponent = () => {

   let[data, setData]=useState(mockData)
   function click() {
       data = data.filter((item) => {
         return item.info.avgRating>4
       }) 
      setData(data)
      console.log(data.length)

   }
   return (
      <div className='body-container'>
         <div className="filter">
            <button className="btn btn-outline-primary  " onClick={click} >Top rated Restaurants</button>
         </div>
         <div className='search'>
            <input className='' type='text' id='text' placeholder='Enter the Food or Restaurant.' />
            <button className=' ms-2 btn btn-outline-primary rounded'>Search</button>
         </div>
         <div className='resty d-flex flex-wrap '>
            {data.map(item => (
               <Restocards key={item.info.id} data={item} />
            ))}
         </div>
      </div>
   )
}

export default BodyComponent