import React from 'react'
import '../../App.css'
import './event.css'
import EventCard from './eventcard';


export default function event(){
    const eventbdc=[
        {"num":"Git-Webinar", "date1":"Mon XX, XXXX" , "content1":"Git is like an iceberg to most people: they know the basic commands, but miss out on its real powers. In this 1-hour webinar, we show you how Git can save your neck - by helping you roll back, revert, and generally undo almost any mistakes that might happen.", },
        {"num":"M. Learning", "date1":"Mon XX, XXXX" , "content1":"Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.", },
        {"num":"Abhiyantriki", "date1":"Mon XX, XXXX" , "content1":"Abhiyantriki is the annual technical festival of K.J. Somaiya College of Engineering. Previously, organizations like DRDO, BARC, ISRO, DAE have participated in the fest along with prominent personalities such as the late Dr. A.P.J.", },
        {"num":"TownHall", "date1":"Mon XX, XXXX" , "content1":"Townhall is an American politically conservative website, print magazine and radio news service. Previously published by the Heritage Foundation, it is now owned and operated by Salem Communications.", }
 
        
    ]
    return(
        <>
<div className="bdc-event">
        {
            
        eventbdc.map(eventblock =>{
                return<EventCard number={eventblock["num"]} content={eventblock["content1"]} date={eventblock["date1"]} />            
         } )
                }
                </div>
    </>
)}