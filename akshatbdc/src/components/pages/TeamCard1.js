import React from "react";
import './Team1.css';
// import logo from '../src./components./logo193.png';


const TeamCard1 = (Props) => {
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
                        <div className="team-social">
                           <a href={Props.gh} target="_blank"> <div className="fb"><i className='fab fa-github' /> </div></a>
                           <a href={Props.ln} target="_blank"><div className="fb"><i className='fab fa-linkedin' /></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}
export default TeamCard1;
