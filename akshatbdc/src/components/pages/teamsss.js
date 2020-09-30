import React from 'react'
import '../../App.css'
import './teamsss.css'
// import './Team1.css'
import { Link } from 'react-router-dom'

export default function teamsss(){
    return(
        <>
<div className="recruit">
    Coming Soon<span className="dotv dot-1v"></span><span className="dotv dot-2v"></span><span className="dotv dot-3v"></span>
</div>
 <Link to="/year">
                <div className="back-123">
                <i className="fa fa-backward"></i>
                </div>
            </Link>
    </>
)}