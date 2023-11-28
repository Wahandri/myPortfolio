import React from 'react';
import "./Projects.css";
import FindTheNumber from "../../images/adivinaElNumero.png";
import jokesWeb from "../../images/JokesWeb.png";
import SkillsImage from '../SkillsImage/SkillsImage';
import BtnLink from '../BtnLink/BtnLink';
import imgGithubBlack from "../../images/githubBlack.png";


export default function Projects() {
  return (
    <div className='flexCenter column'>
        <h1>Projects</h1>
        <div className='listProject'>
            <div className='cardProject flexCenter'>
                <img className='imgProject' src={FindTheNumber} alt=''/>
                <div className='description flexBetween column'>
                    <h3>Simple game of guessing a random number. (great for practicing states)</h3>
                    <div className='skills flexCenter'>
                        <SkillsImage skill={'html'} />
                        <SkillsImage skill={'css'} />
                        <SkillsImage skill={'js'} />
                    </div>
                    <div className='btnsLink'>
                        <BtnLink to='/findTheNumber'>Play</BtnLink>
                        <BtnLink to="https://github.com/Wahandri/GessTheNumber"><img width="30px" src={imgGithubBlack} alt=''></img></BtnLink>
                    </div>
                </div>
            </div>
            <div className='cardProject flexCenter'>
                <img className='imgProject' src={jokesWeb} alt=''/>
                <div className='description flexCenter column'> 
                    <h3>Small social network to share, rate and listen to your favorite jokes on audio</h3>
                    <div className='skills flexCenter rows3'>
                        <SkillsImage skill={'html'} />
                        <SkillsImage skill={'css'} />
                        <SkillsImage skill={'js'} />
                        <SkillsImage skill={'react'} />
                        <SkillsImage skill={'node'} />
                        <SkillsImage skill={'mongo'} />
                    </div>
                </div>
            </div>
            <div className='cardProject'>3</div>
            <div className='cardProject'>4</div>
            <div className='cardProject'>5</div>
        </div>
    </div>
  )
}
