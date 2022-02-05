import './AppCard.css'
import cards from './CardComponent'
import React from 'react';

export default  function AppCard() {
    return(
        <section className="appSection">
            <div className="appWrapper">
                <div className="cards">
                    {cards.map((card, index) => (
                        <div className="appCard" style={{background:card.css}}>
                            <div key= {index} className="appContent">
                                <h2>{card.block}</h2>
                                <h3>{card.heading}</h3>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
    );
}