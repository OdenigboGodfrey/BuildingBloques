import './ServiceSec.css'
import React from 'react';
import eighteen from '../../assets/18.png'
import twelve from '../../assets/12.png'
import twenty from '../../assets/20.png'
import sixteen from '../../assets/16.png'
import thirteen from '../../assets/13.png'
import seventeen from '../../assets/17.png'

export default function ServiceSection() {
    return(
        <section className="serviceSection">
            <div className="serviceFirst">
                <h3>
                    Handcrafting brands using innovative strategies that gives entrepreneurs a hazzle free start up experience
                </h3>
            </div>
            <div className="serviceSecond">
                <div className="serviceCard">
                    <img src={eighteen} alt="UX" />
                    <h4 className="serviceHeader">UX Strategy</h4>
                    <p>Invest in UX. Trust us: When you prioritize usability, you get happy, loyal customers.</p>
                </div>
                <div className="serviceCard">
                    <img src={twelve} alt="UI/UX" /> 
                    <h4 className="serviceHeader">UI/UX Design</h4>
                    <p>Users come first. We can help you ensure an easy-to-navigate interface to attract and retain customers. </p>
                </div>
                <div className="serviceCard">
                    <img src={twenty} alt="Visual Design" />
                    <h4 className="serviceHeader">Visual Design</h4>
                    <p>If a picture paints a thousand words, then brand visuals pay back dividends. Our designers are here to hel. </p>
                </div>
            </div>
            <div className="serviceThird">
                <div className="serviceCard">
                    <img src={thirteen} alt="Content Strategy" />
                    <h4 className="serviceHeader">Content Strategy</h4>
                    <p>Getting your story out there can be tricky. That's where our savvy content pros step in.</p>
                </div>
                <div className="serviceCard">
                    <img src={seventeen} alt="Brand Story" />
                    <h4 className="serviceHeader">Brand Story</h4>
                    <p>It all starts with a good story - and that's something we are passionate about here at Strategea. </p>
                </div>
                <div className="serviceCard">
                    <img src={sixteen} alt="Development" />
                    <h4 className="serviceHeader">Development</h4>
                    <p>Brands are never static. Strategea evolves with you to meet changing times, trends, and customer needs.</p>
                </div>
            </div>
        </section>
    )
}