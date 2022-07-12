import React from 'react'
import './style.css'
import reasImg1 from '../../assets/image1.png';
import reasImg2 from '../../assets/image2.png';
import reasImg3 from '../../assets/image3.png';
import reasImg4 from '../../assets/image4.png';
import nb from '../../assets/nb.png'
import adidasImg from '../../assets/adidas.png';
import nikeImg from '../../assets/nike.png';
import tickImg from '../../assets/tick.png';


const ReasonsComponent = () => {
  return (
    <div className='reason-container'>
        <div className="reason-left">
            <img src={reasImg1} alt="reason" />
            <img src={reasImg2} alt="reason" />
            <img src={reasImg3} alt="reason" />
            <img src={reasImg4} alt="reason" />
        </div>
        <div className="reason-right">
            <span>some reasons</span>
            <div>
                <span className='empty-text'>why</span> <span>choose us?</span>
            </div>
            <div className="points">
                <div><img src={tickImg} alt="points"/><span>over 100+ expert coach</span></div>
                <div><img src={tickImg} alt="points" /><span>train smarter and faster than before</span></div>
                <div><img src={tickImg} alt="points"/><span>1 free program for new member</span></div>
                <div><img src={tickImg} alt="points"/><span>reliable partners</span></div>
            </div>
            <span>OUR PARTNERS</span>
            <div className="partners-grp">
                <img src={nb} alt="partners" />
                <img src={adidasImg} alt="partners" />
                <img src={nikeImg} alt="partners" />
            </div>
        </div>
    </div>
  )
}

export default ReasonsComponent
