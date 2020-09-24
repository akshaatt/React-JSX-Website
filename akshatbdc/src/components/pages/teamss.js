import React from 'react'
import '../../App.css'
import TeamCard1 from './TeamCard1';
import './Team1.css';
import { Link } from 'react-router-dom'

// import logo from '../src./components./logo193.png';
import logo from './logo193.png';

export default function Teamss(){
    const teamsnames=
    [
        {"name":"Riya Garg", "branch": "CSE", "year": "3rd", "domain": "App Development","fb":"", "gh":"", "insta":""},
        {"name":"Tanya Agarwal", "branch": "IT", "year": "3rd", "domain": "Web Development","fb":"", "gh":"", "insta":""},
        {"name":"Taru Agarwal", "branch": "CSE", "year": "3rd", "domain": "App Development","fb":"", "gh":"", "insta":""},
        {"name":"Devansh Srivastav", "branch": "CSE", "year": "3rd", "domain": "Web Development","fb":"", "gh":"", "insta":""},
        {"name":"Kishan Baranwal", "branch": "CSE", "year": "3rd", "domain": "Web Development","fb":"", "gh":"", "insta":""},
        {"name":"Deepak Chaurasia", "branch": "IT", "year": "3rd", "domain": "Web Development","fb":"", "gh":"", "insta":""},
        {"name":"Karan Yadav", "branch": "CSE", "year": "3rd", "domain": "Machine Learning","fb":"", "gh":"", "insta":""},
        {"name":"Prakanshu Sahu", "branch": "CSE", "year": "3rd", "domain": "Machine Learning","fb":"", "gh":"", "insta":""},
    
   

];
    return (
        <>
        <h1 className="team">Third-Year Members</h1>
        <div className="light">
        {
            teamsnames.map(singlecard=>{
                    return <TeamCard1  name={singlecard["name"]}  domain={singlecard["domain"]} fb={singlecard["fb"]} gh={singlecard["gh"]} insta={singlecard["insta"]}></TeamCard1>
                })
        }
        </div>
        <Link to="/year">
                <div className="back-1234">
                <i className="fa fa-backward"></i>
                </div>
            </Link>
        </>
    );
}