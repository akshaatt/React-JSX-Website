import React from 'react'
// import '../../App.css'
import './register.css'
import { Link } from 'react-router-dom'
import { Formik } from "formik"
import * as Yup from "yup"

export default function ValidationLoginForm(){

   return (
<>
  <div classname="inpmain">  
<div className="inp_container">
    <div className="inp_header">
        <h2>Registration Form</h2>
    </div>
    <form className="inp_form" id="inp_form">
<div className="form-control">
    <label>Name</label>
    <input type="text" name="" id="username" placeholder="Enter Full Name"></input>
	<i classname="fab fa-check" />
    <i classname="fab fa-exclamation-circle" />
    <small>Error Message</small>
    </div>
    <div className="form-control">
    <label>Email</label>
    <input type="Email" name="" id="email" placeholder="Enter Email"></input>
	<i classname="fab fa-check" />
    <i classname="fab fa-exclamation-circle" />
    <small>Error Message</small>
    </div>
    <div className="form-control">
    <label>Phone Number</label>
    <input type="number" name="" id="phone" placeholder="Enter Phone Number"></input>
	<i classname="fab fa-check" />
    <i classname="fab fa-exclamation-circle" />
    <small>Error Message</small>
    </div>
    <div className="form-control">
    <label>Domain</label>
    <input type="text" name="" id="domain" placeholder="Enter Domain"></input>
	<i classname="fab fa-check" />
    <i classname="fab fa-exclamation-circle" />
    <small>Error Message</small>
    </div>
    <div className="form-control">
    <label>Languages</label>
    <input type="text" name="" id="language" placeholder="Enter Known Languages"></input>
	<i classname="fab fa-check" />
    <i classname="fab fa-exclamation-circle" />
    <small>Error Message</small>
    </div>
    <div className="form-control">
    <label>University Roll No.</label>
    <input type="number" name="" id="roll" placeholder="Enter Univrsity Roll No."></input>
	<i classname="fab fa-check" />
    <i classname="fab fa-exclamation-circle" />
    <small>Error Message</small>
</div>
<input classname="inp_btn" type="submit" value="submit" name="" ></input>
    </form>
</div>
    
    </div>   
</>
    );
}