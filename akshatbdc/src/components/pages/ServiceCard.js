import React from "react";
import './Services.css';


const ServiceCard = (Props)=>{
 return(<>

<div className='service-center'>
    <div className='service-heading-bold'>{Props.heading}</div>
    <div className='service-text'>{Props.text}</div>
</div>


 </>
 )
}
export default ServiceCard