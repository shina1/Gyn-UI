import React from 'react'
import HeaderComponent from '../HeaderComp'
import './style.css'
import person_img from '../../assets/hero_image.png';
import heroImgBck from "../../assets/hero_image_back.png";
import heartImg from  "../../assets/heart.png";
import caloriesImg from "../../assets/calories.png";

const HeroSection = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <HeaderComponent />
        <div className='oval'>
            <div className="slide"></div>
            <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
            <div>
                <span className='empty-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>
                    Ideal body
                </span>
            </div>
            <div>
                <span>
                    In here we will help you to shape and
                    build your ideal body and live up your life to fullest
                </span>
            </div>
        </div>
        <div className="figures">
            <div>
                <span>+140</span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>+978</span>
                <span>members joined</span>
            </div>
            <div>
                <span>+50</span>
                <span>fitness programs</span>
            </div>
        </div>
        <div className="hero-btns">
            <div className="btn">Get Started</div>
            <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="hero-right">
        <button className='btn'>Join Now</button>
        <div className="hear-rate">
            <img src={heartImg} alt="hear rate" />
            <span>Heart Rate</span> <span>100 bpm</span>
        </div>
        <img src={person_img} alt="person tying shoe"/>        
        <img src={heroImgBck} alt="background" />
        <div className="calories-box">
            <img src={caloriesImg} alt="calories burned" />
            <div className="calory-span-box">
                <span>Calories Burned</span>
                <span>150 kcal</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
