import './Hero.css'
import React from 'react';

export default function HeroSection () {
    return (
        <section className="heroSection">
            <div className="bigHeroText">
                <h1 className="left">Building</h1>
                <h1 className="right">Bloque</h1>
            </div>
            <div className="smallHeroText">
                <h4>We are a team of versatile creatives, handcrafting best in class products,
                    services and ecommerce experiences that connects brands to their customers.
                </h4>
            </div>
        </section>
    )
}