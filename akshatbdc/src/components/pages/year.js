import React from 'react'
import { Link } from 'react-router-dom';

import './year.css'


export default function year(){
    return(
        <>
<div className="yearmain">
<Link to="/Team" className="box2">
<div >
    <div className="glass"></div>
        <div className="content2">
           <h2>Fourth-Year</h2>
            <p>The Card Presents You the Super-Seniors of The BDCoE Society! </p>
            <h3>2017-2021</h3>
        </div>
    
</div>
</Link>
<Link to="/teamss" className="box2">
<div >
    <div className="glass"></div>
        <div className="content2">
            <h2>Third-Year</h2>
            <p>The Card Presents You the Current Third Year Members of BDCoE society! </p>
            <h3>2018-2022</h3>
        </div>
    
</div>
</Link>
<Link to="/teamsss" className="box2">
<div >
    <div className="glass"></div>
        <div className="content2">
            <h2>Second-Year</h2>
            <p>The Card Presents You The Newly Recruited Second Year Members of BDCoE Society! </p>
            <h3>2019-2023</h3>
        </div>
    
</div>
</Link>
</div>

    </>
)}