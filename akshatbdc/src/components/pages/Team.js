import React from 'react'
import '../../App.css'
import TeamCard1 from './TeamCard1';
import './Team1.css';
import { Link } from 'react-router-dom'

// import logo from '../src./components./logo193.png';
import logo from './logo193.png';

export default function Teams() {
    const teamsnames =
        [
            { "name": "Shashank Sahai", "branch": "IT", "year": "4th", "domain": "App Development", "fb": "", "gh": "https://github.com/Shashank25071999", "ln": "" },
            { "name": "Ripudaman Singh", "branch": "IT", "year": "4th", "domain": "Web Development", "fb": "", "gh": "https://github.com/ripu502", "ln": "" },
            { "name": "Anand Kumar", "branch": "CSE", "year": "4th", "domain": "Web Development" , "gh": "https://github.com/anandhere8", "ln": "" },
            { "name": "Disha Rastogi", "branch": "IT", "year": "4th", "domain": "Machine Learning", "fb": "", "gh": "https://github.com/disha28", "ln": "" },
            { "name": "Vidhi Dixit", "branch": "IT", "year": "4th", "domain": "Machine Learning", "fb": "", "gh": "", "ln": "" },
            { "name": "Ambika Agarwal", "branch": "CSE", "year": "4th", "domain": "Designer", "fb": "", "gh": "", "ln": "" },
            { "name": "Shivam Saxena", "branch": "CSE", "year": "4th", "domain": "Machine Learning", "fb": "", "gh": "https://github.com/an09mous", "ln": "" },
            { "name": "Shivam Tiwari", "branch": "CSE", "year": "4th", "domain": "Machine Learning", "fb": "", "gh": "", "ln": "" },
            { "name": "Gaurang Agarwal", "branch": "CSE", "year": "4th", "domain": "App Development", "fb": "", "gh": "https://github.com/gaurang1235", "ln": "" },
            { "name": "Vibhas Singh", "branch": "CSE", "year": "4th", "domain": "App Development", "fb": "", "gh": "", "ln": "" },


        ];
    return (
        <>
            <h1 className="team">Fourth-Year Members</h1>
            <div className="light">
                {
                    teamsnames.map(singlecard => {
                        return <TeamCard1 name={singlecard["name"]} domain={singlecard["domain"]} fb={singlecard["fb"]} gh={singlecard["gh"]} ln={singlecard["ln"]}></TeamCard1>
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