import'./index.css';

const Left =()=>{

return(

   <div className="cars">

<div className="bmw1">

<img className='bmwimg' src="/bmw-22420.png" />

</div>

   <div className="upper" >

   <h1 className='carheading'>BMW M4-Competition</h1>
   

    <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi esse natus, pariatur,
         numquam blanditiis excepturi, possimussunt rem laborum assumenda voluptatibus quaerat 
         officiis dolorum velit animi? Rem porro vitae iste?
         
          {/* numquam blanditiis excepturi, possimussunt rem laborum assumenda voluptatibus quaerat 
         officiis dolorum velit animi? Rem porro vitae iste? */}
         </p>

       

         <button className='viewdetails'>View Details</button>

   </div>

</div>


)




}

export default Left;