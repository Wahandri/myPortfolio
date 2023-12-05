import React from 'react';
import "./Projects.css";
import FindTheNumber from "../../images/adivinaElNumero.png";
import jokesWeb from "../../images/JokesWeb.png";
import SkillsImage from '../SkillsImage/SkillsImage';
import shaktiWeb from "../../images/shaktiWeb.png";
import BtnLink from '../BtnLink/BtnLink';
import imgGithubBlack from "../../images/githubBlack.png";


export default function Projects() {
  return (
    <div className='flexCenter column'>
        <h1 className='sombra'>My Experience</h1>
        <div className='listProject'>
            <div className='flexCenter'>
                <div className='cardProject'>
                    <img className='imgProject' src={FindTheNumber} alt=''/>
                    <div className='description flexBetween column'>
                        
                        <div className='skills flexCenter'>
                            <SkillsImage skill={'html'} />
                            <SkillsImage skill={'css'} />
                            <SkillsImage skill={'js'} />
                            <SkillsImage skill={'react'} />
                        </div>
                        <div className='btnsLink'>
                            <BtnLink to='/findTheNumber'>Play</BtnLink>
                            <BtnLink to="https://github.com/Wahandri/GessTheNumber"><img width="30px" src={imgGithubBlack} alt=''></img></BtnLink>
                        </div>
                    </div>
                </div>
                <h3>Game of guessing a random number in 10 tries. Each level more difficult. Can you reach level 10?</h3>
            </div>
            <div className='flexCenter reverse'>
                <div className='cardProject flexCenter'>
                    <img className='imgProject' src={jokesWeb} alt=''/>
                    <div className='description flexCenter column'> 
                        
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
                <h3>Small social network to share, rate and listen to your favorite jokes on audio</h3>
            </div>
            <div className='flexCenter'>
                <div className='cardProject flexCenter'>
                    <img className='imgProject' src={shaktiWeb} alt=''/>
                    <div className='description flexCenter column'> 
                        
                        <div className='skills flexCenter rows3'>
                            <SkillsImage skill={'html'} />
                            <SkillsImage skill={'css'} />
                            <SkillsImage skill={'js'} />
                            <SkillsImage skill={'react'} />
                        </div>
                        <div className='btnsLink'>
                            <BtnLink to='https://shakti-coaching.pages.dev/'>Go</BtnLink>
                            <BtnLink to="https://github.com/Wahandri/ShaktiYoga.git"><img width="30px" src={imgGithubBlack} alt=''></img></BtnLink>
                        </div>
                    </div>
                </div>
                <h3>website of a small real business of personal coaching, meditation, yoga, etc.</h3>
            </div>
            
        </div>
    </div>
  )
}
