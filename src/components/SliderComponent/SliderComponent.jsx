import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick';

const SliderComponent = ({ arrImage }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 2000
    };
    return (
        <Slider {...settings}>
            {arrImage.map((image) => {
                return (<Image src={image} alt="slider" preview={false} witdh="100%" />)
            })}</Slider>
    )
}

export default SliderComponent
