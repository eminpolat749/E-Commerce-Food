import React from "react";
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'
import img_1 from '../../assets/1.png'
import img_2 from '../../assets/2.png'
import img_3 from '../../assets/3.png'
import img_4 from '../../assets/4.png'
import Autoplay from 'embla-carousel-autoplay'


export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div>
            <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src={img_1} alt="" />
                </div>
                <div className="embla__slide">
                    <img src={img_2} alt="" />
                </div>
                <div className="embla__slide">
                    <img src={img_3} alt="" />
                </div>
                <div className="embla__slide">
                    <img src={img_4} alt="" />
                </div>
            </div>
        </div>
        <br />
        </div>
    )
}