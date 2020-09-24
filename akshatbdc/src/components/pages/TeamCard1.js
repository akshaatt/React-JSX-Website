import React from "react";
import './Team1.css';
// import logo from '../src./components./logo193.png';


const TeamCard1 = (Props)=>{
    return (<>
      <div className='theline'>
          <div className="maincontainer">
            <div className="thecard">
                <div className="front">
                    <img src="/images/img-coming.jpg" class="imgfront" />
                </div>
                <div className="back">
                    <p className="info">{Props.name}</p>
                    <span className="technical"></span><span className="domain">{Props.domain}</span>
                    {/* <p className="branch">Branch:-{Props.branch}</p> */}
                    {/* <p className="year">Year: {Props.year}</p> */}
                    <div className="team-social">
                       {/* <div className="fb"><i className='fab fa-facebook-f'/></div> */}
                       <div className="fb"><i className='fab fa-github'/> </div>
                       {/* <div className="fb"><i className='fab fa-instagram'/></div> */}
                       <div className="fb"><i className='fab fa-linkedin'/></div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            
    </>);
}
export default TeamCard1;
// chevron-left