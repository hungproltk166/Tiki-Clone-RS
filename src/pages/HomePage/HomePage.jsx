import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperButtonMore, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/hinh1.png';
import slider2 from '../../assets/images/hinh2.png';
import slider3 from '../../assets/images/hinh3.png';
import CartComponent from '../../components/CartComponent/CartComponent';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'Lap Top'];
    return (
        <>
            <div style={{ padding: '0 100px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return <TypeProduct name={item} key={item} />;
                    })}
                </WrapperTypeProduct>
            </div>
            <div
                id="container"
                style={{ backgroundColor: '#efefef', padding: '0 100px', height: '1000px', width: '100%' }}
            >
                <SliderComponent arrImage={[slider1, slider2, slider3]} />
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <WrapperButtonMore
                        textButton="xem thêm"
                        type="outline"
                        styleButton={{
                            border: '1px solid rgb(11,16,229)',
                            width: '240px',
                            height: '38px',
                            borderRadius: '4px',
                        }}
                        styleTextButton={{ fontWeight: 500 }} />
                </div>
            </div >
        </>
    );
};

export default HomePage;
