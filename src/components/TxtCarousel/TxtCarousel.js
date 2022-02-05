import './TxtCarousel.css'
import React from "react";
import Slider from "react-slick";

export default  function TxtCarousel () {
 
    const settings = {
        focusOnSelect: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
    };
    return (
        <section className="testSection">
            <Slider {...settings}>
                <div>
                    <div className="testCard">
                        <h2>"Building Bloques is truly who they say they are. Providing the best tailored services for every business"</h2>
                        <h4>Chris Wills</h4>
                    </div>
                </div>
                <div>
                    <div className="testCard">
                        <h2>"Thanks to Building Bloques, my small business is booming. I gave them the idea and they excuted 100%"</h2>
                        <h4>Seint Maureen</h4>
                    </div>
                </div>
                <div>
                    <div className="testCard">
                        <h2>"I've been able to meet my business expectations for the first quater of the year after rebranding with Building Bloques."</h2>
                        <h4>Opeyemi David</h4>
                    </div>
                </div>
                <div>
                    <div className="testCard">
                        <h2>"Simply the best choice. Their brand strategy and creative process is what every business in Nigeria needs"</h2>
                        <h4>Wale Adeyemi</h4>
                    </div>
                </div>
            </Slider>
                    
        </section>
    );

}





