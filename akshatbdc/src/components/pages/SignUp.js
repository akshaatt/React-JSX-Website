import React from 'react'
// import '../../App.css'
import './register.css'
import { Link } from 'react-router-dom'
import { Formik } from "formik"
import * as Yup from "yup"

export default function ValidationLoginForm(){

   return (
<>
<div classname="sub-main">
<section5 className="contact5">
    <div className="contentk">
    <h2>Contact BDCoE</h2>
<p>just Solve you Query regarding Society! Write / Contact to BDCoE</p>
    </div>
    <div className="container5">
        <div className="contactInfo5">
        <div className="box5">
                <div className="icon5">
                <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text5">
                    <h3>Address</h3>
                    <p>CS-IT Block, Fourth Floor AKGEC, Ghaziabad.</p>
                </div>
            </div>
            <div className="box5">
                <div className="icon5">
               	
<i className="fas fa-envelope"></i>
                </div>
                <div className="text5">
                    <h3>Email</h3>
                    <p>bdcoeakgec@gmail.com</p>
                </div>
            </div>
            <div className="box5">
                <div className="icon5">
                <i className="fas fa-phone-alt"></i>
                
                </div>
                <div className="text5">
                    <h3>Phone Numbers</h3>
                    <p>546-865-208</p>
                </div>
            </div>
        </div>
        <div className="contactForm5">
            <form>
                <h2>Send Problem</h2>
                <div className="inputBox5">
                    <input type="text" name="" required="required" ></input>
                    <span>Full Name</span>
                </div>
                <div className="inputBox5">
                    <input type="number" name="" required="required"></input>
                    <span>Student Number</span>
                </div>
                <div className="inputBox5">
                    <input type="text" name="" required="required"></input>
                    <span>Email</span>
                </div>
                <div className="inputBox5">
                    <textarea required="required" ></textarea>
                    <span>Tell Your Concern...</span>
                </div>
                <Link to="/clear" className="inputBox5">
                <div >
                <input type="Submit" value="submit" name="" required="required" className="btn5"></input>
                </div>
                </Link>
            </form>
        </div>
    </div>
</section5> 
</div>
</>
    );
}