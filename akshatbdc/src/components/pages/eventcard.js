import React from 'react';


const EventCard = (Props)=>{
    return(
        <>
<div className="container">
<div className="card">
    <div className="circle">
        <h2 className="num">{Props.number}</h2>
        <img src="/images/logo193.png" className="img" />
    </div>
    <div className="content">
        <p className="content1">{Props.content}</p>
    </div>
    <div className="date">
        <h3 className="date1">{Props.date}</h3>
    </div>
</div>
    
</div>
        </>
    )
}
export default EventCard