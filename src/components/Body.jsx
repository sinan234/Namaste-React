import Restocards from "./Restocards"
import {data} from '../utils/mockData'


const BodyComponent=()=>(
   <div className='body-container'>
       <div className='search'>
          <input className='' type='text' id='text' placeholder='Enter the Food or Restaurant.'/>
          <button className=' ms-2 btn btn-outline-primary rounded'>Search</button>
       </div>
       <div className='resty d-flex flex-wrap '>
       {data.map(item => (
    <Restocards key={item.info.id} data={item} />
  ))}
       </div>
   </div>
)

export default BodyComponent