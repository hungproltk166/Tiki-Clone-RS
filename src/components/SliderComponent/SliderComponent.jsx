import { Image } from 'antd';
import React from 'react'
import { WrapperSlideStyle } from './style';

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
        <WrapperSlideStyle {...settings}>
            {arrImage.map((image) => {
                return (<Image width="100%" height="300px" src={image} alt="slider" preview={false} />)
            })}
        </WrapperSlideStyle>
    )
}
export default SliderComponent
