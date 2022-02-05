import './ImgCarousel.css'
import React, { Component } from "react";
import Slider from "react-slick";

export default class ImgCarousel extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className="workSection">
        <Slider {...settings}>
          < div>
                <div className="slideCard slideOne fade">
                    <h3 className="slideText">Some text about the image</h3>
                </div>
            </div>
            <div>
                <div className="slideCard slideTwo fade">
                    <h3 className="slideText">Some text about the image</h3>
                </div>
            </div>
          <div>
                <div className="slideCard slideThree fade">
                    <h3 className="slideText">Some text about the image</h3>
                </div>
          </div>
          <div>
          <     div className="slideCard slideFour fade">
                    <h3 className="slideText">Some text about the image</h3>
                </div>
          </div>
          <div>
                <div className="slideCard slideFive fade">
                    <h3 className="slideText">Some text about the image</h3>
                </div>
          </div>
          <div>
                <div className="slideCard slideSix fade">
                    <h3 className="slideText">Some text about the image</h3>
                </div>
          </div>
          <div>
                <div className="slideCard slideSeven fade">
                    <h3 className="slideText">Some text about the image</h3>
                </div>
          </div>
          <div>
                <div className="slideCard slideEight fade">
                    <h3 className="slideText">Some text about the image</h3>
                </div>
          </div>
        </Slider>
      </section>
    );
  }
}