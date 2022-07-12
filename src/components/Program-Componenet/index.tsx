import React, { ReactElement } from 'react'
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import './style.css'


let helperTextt: ReactElement | null = null;
// type img =  React.ImgHTMLAttributes<HTMLImageElement>.src?: string | any

const ProgramsComponent = () => {
  return (
    <div className='programs-container' id='programs'>
      <div className="top-text-box">
        <span className='empty-text top-text'>explore our</span><span className='block-text top-text'>programs</span><span className='empty-text top-text'>to shape you</span>
      </div>
      <div className="program-card-cont">
        {
            programsData.map(program => (
              <div className="program-card">
                   {program.image}
                   <span>{program.heading}</span>
                   <span>{program.details}</span>
                   <div className="join-now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                   </div>
                </div> 
            ))
        }
      </div>
    </div>
  )
}

export default ProgramsComponent
