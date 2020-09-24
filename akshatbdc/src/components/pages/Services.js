import React from 'react'
import '../../App.css'
import './Services.css'
import ServiceCard from './ServiceCard';


export default function services() {
    const servicebdc=[
        {"heading":"Web Development", "text":"Web development is the work involved in developing a Web site for the Internet or an intranet. "},
        {"heading":"App Development", "text":"Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones."},
        {"heading":"Machine Learning", "text":"Machine learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence."},
        {"heading":"Competetive Coding", "text":"Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers."},
        {"heading":"Big Data", "text":"Big data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software."},
        {"heading":"Data Science", "text":"Data science uses the data analysed through Big data tools to predict things. A great example of it is, The suggestions we get on youtube are based on the videos what we see. "},
    ];
    return (
        <>
        <h1 className="services">Services</h1>
        <div className="aksshat">
        {
            
        servicebdc.map(serviceblock =>{
                return<ServiceCard heading={serviceblock["heading"]} text={serviceblock["text"]} />            
                })
                }
                </div>
        
        </>
    );
    
}