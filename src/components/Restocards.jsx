import { CDN_URL } from "../utils/constants";

const Restocards=(props)=>{
  
    const {avgRating,cuisines,costForTwo,name}= props?.data?.info
    
    return(
      <div className='res-card mt-3 rounded ms-5' style={{backgroundColor:'#f0f0f0',  maxWidth: '290px'}}>
  <img id='cardimg' className='p-30' src={`${CDN_URL}/${props.data.info.cloudinaryImageId}`} />     
   <div className='d-flex'>
          <div className=' d-flex p-1'>
            <div className='text-xs' >
          <h5 id='lg' className='text-lg' >{name}</h5>
        <h5 id='sm'>{cuisines.slice(0,4).join(',')}</h5>
        <h5 id='sm'> {avgRating}</h5>
        <h5 id='sm'>  Rs. {parseInt(costForTwo.slice(1,4))/2}</h5>
        </div>
          <h6  className=' text-xs' id='time'>{props.data.info.sla.deliveryTime} mins</h6>
          </div>
  
        </div>
      </div>
  )}

  export default Restocards;