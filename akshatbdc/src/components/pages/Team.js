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
            { "name": "Shashank Sahai", "branch": "IT", "year": "4th", "domain": "App Development", "fb": "", "gh": "", "insta": "" },
            { "name": "Ripudaman Singh", "branch": "IT", "year": "4th", "domain": "Web Development", "fb": "", "gh": "", "insta": "" },
            { "name": "Anand Kumar", "branch": "CSE", "year": "4th", "domain": "Web Development" },
            { "name": "Disha Rastogi", "branch": "IT", "year": "4th", "domain": "Machine Learning", "fb": "", "gh": "", "insta": "" },
            { "name": "Vidhi Dixit", "branch": "IT", "year": "4th", "domain": "Machine Learning", "fb": "", "gh": "", "insta": "" },
            { "name": "Ambika Agarwal", "branch": "CSE", "year": "4th", "domain": "Designer", "fb": "", "gh": "", "insta": "" },
            { "name": "Shivam Saxena", "branch": "CSE", "year": "4th", "domain": "Machine Learning", "fb": "", "gh": "", "insta": "" },
            { "name": "Shivam Tiwari", "branch": "CSE", "year": "4th", "domain": "Machine Learning", "fb": "", "gh": "", "insta": "" },
            { "name": "Gaurang Agarwal", "branch": "CSE", "year": "4th", "domain": "App Development", "fb": "", "gh": "", "insta": "" },
            { "name": "Vibhas Singh", "branch": "CSE", "year": "4th", "domain": "App Development", "fb": "", "gh": "", "insta": "" },


        ];
    return (
        <>
            <h1 className="team">Fourth-Year Members</h1>
            <div className="light">
                {
                    teamsnames.map(singlecard => {
                        return <TeamCard1 name={singlecard["name"]} domain={singlecard["domain"]} fb={singlecard["fb"]} gh={singlecard["gh"]} insta={singlecard["insta"]}></TeamCard1>
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