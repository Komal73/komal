import React from 'react'
import "./Slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
  return (
    <div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
          >
                <div>
                    <img src="banner1.jpg" />
                </div>
                <div>
                    <img src="banner2.jpg" />
                </div>
                <div>
                    <img src="banner3.jpg" />
                </div>
                <div>
                    <img src="banner4.jpg" />
                </div>
                <div>
                    <img src="banner5.jpg" />
                </div>
            </Carousel>
    </div>
  )
}

export default Slider