import React from 'react'
// import '../../App.css'
import './register.css'
import { Link } from 'react-router-dom'
export default function SignUp(){
    return (
<>
    <h1 className="sign-up">
    Registration @BDCoE
    </h1>
    <form>
    <div className="wrap">
<div className='title'>
    Registration @BDCoE
</div>
<div className='form'>
    <div className='input_field' >
        <label>First Name</label>
        <input type="text" className='input' placeholder="Enter Your First Name" required />
    </div>
    <div className='input_field'>
        <label>Last Name</label>
        <input type="text" className='input' placeholder="Enter Your Last Name" required />
    </div>
    <div className='input_field'>
        <label>Email ID</label>
        <input type="email" className='input' placeholder="Enter Your @akgec.ac.in Email" required  />
    </div>
    <div className='input_field'>
        <label>Phone Number</label>
        <input type="text" className='input' placeholder="Enter Whatsapp Phone Number" required />
    </div>
    <div className='input_field'>
        <label>Gender</label>
        <div className="custom_select">
        <select>
            <option value="" selected>Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="">Other</option>
        </select>
        </div>
    </div>
    <div className='input_field'>
        <label>Domain</label>
        <div className="custom_select">
        <select>
            <option value="" selected>Your Domain</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
        </select>
        </div>
    </div>
    <div className='input_field'>
        <label>Tech. Knowledge</label>
        <input type="text" className='input' placeholder="Languages/Softwares You Know" required />
    </div>
    <div className='input_field'>
        <label>Student Number</label>
        <input type="text" className='input' placeholder="Enter Your Seven Digit Student Number" required />
    </div>
    <div className='input_field'>
        <label>University Number</label>
        <input type="text" className='input' placeholder="Enter Your 13 Digit University Roll No." required />
    </div>
    <div className='input_field'>
        <label>Class Section</label>
        <input type="text" className='input' placeholder="Enter Your Current Section" required />
    </div>
    <div className="input_field_terms">
        <label className="check">
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
        <span>I Agree All Terms And Conditions</span>
    </div>
    <Link to="/clear">
    <div className='input_field'>
    <input type="submit" value="Get Recruited Now" className="_btn_" />
    </div>
    </Link>
</div>
    </div>
    </form>
    
</>
    );
}