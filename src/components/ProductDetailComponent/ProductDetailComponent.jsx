import { Col, Row, Image, InputNumber } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/product1.jpg'
import imageProductSmall from '../../assets/images/product1small.jpg'
import imageProductSmall01 from '../../assets/images/product1small01.jpg'
import {
    WrapperAddressProduct,
    WrapperBtnQuantityProduct,
    WrapperInputNumber,
    WrapperPriceProduct,
    WrapperPriceTextProduct,
    WrapperQuantityProduct,
    WrapperStyleColSamll,
    WrapperStyleImageSmall,
    WrapperStyleNameProduct,
    WrapperStyleTextSell
} from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailComponent = () => {
    const onChange = () => { }
    return (
        <div>
            <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}  >
                <Col span={10} style={{ borderRight: '1px solid #e5e5e5' }}>
                    <Image src={imageProduct} alt='image product' preview={true} />
                    <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                        <WrapperStyleColSamll span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt='image product smal' preview={true} />
                        </WrapperStyleColSamll>
                        <WrapperStyleColSamll span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall01} alt='image product smal01' preview={true} />
                        </WrapperStyleColSamll>
                        <WrapperStyleColSamll span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall01} alt='image product smal01' preview={true} />
                        </WrapperStyleColSamll>
                        <WrapperStyleColSamll span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall01} alt='image product smal01' preview={true} />
                        </WrapperStyleColSamll>
                        <WrapperStyleColSamll span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall01} alt='image product smal01' preview={true} />
                        </WrapperStyleColSamll>
                        <WrapperStyleColSamll span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall01} alt='image product smal01' preview={true} />
                        </WrapperStyleColSamll>
                    </Row>
                </Col>
                <Col span={14} style={{ paddingLeft: '6px' }}>
                    <WrapperStyleNameProduct span={14}>Clean Code – Mã Sạch Và Con Đường Trở Thành Lập Trình Viên Giỏi
                    </WrapperStyleNameProduct>
                    <div>
                        <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                        <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                        <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                        <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                        <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                        <WrapperStyleTextSell>| Đã bán 1000 sản phẩm</WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>
                            309.000đ
                        </WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <sapn>Giao đến</sapn>
                        <span className='address'>Q1,p.bến nghé,Thành Phố Hồ Chính Minh </span> -
                        <span className='changeaddress'>Đổi địa chỉ </span>
                    </WrapperAddressProduct>
                    <div style={{ margin: '10px 0 20px', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5', padding: '10px 0' }}>
                        <div style={{ marginBottom: '10px' }}>số lượng</div>
                        <WrapperQuantityProduct>
                            <WrapperQuantityProduct>
                                <button style={{ border: 'none', background: 'transparent' }}>
                                    <MinusOutlined style={{ color: '#000', fontSize: '25px' }} />
                                </button>
                                <WrapperInputNumber defaultValue={3} onChange={onchange} size='small' />
                                <button style={{ border: 'none', background: 'transparent' }}>
                                    <PlusOutlined style={{ color: '#000', fontSize: '25px' }} />
                                </button>
                            </WrapperQuantityProduct>
                        </WrapperQuantityProduct>
                    </div>
                    <div>
                        <ButtonComponent
                            size={40}
                            bordered={false}
                            styleButton=
                            {{
                                backgroundColor: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '220px',
                                borderRadius: '4px',
                                border: 'none'
                            }}
                            textButton={'Chọn mua'}
                            styleTextButton={{ color: '#fff', fontWeight: '700' }}>
                        </ButtonComponent>
                        <ButtonComponent
                            size={40}
                            bordered={false}
                            styleButton={{ backgroundColor: 'transparent', height: '48px', width: '220px', borderRadius: '4px', border: '1px solid blue' }}
                            textButton={'mua trả sau'}
                            styleTextButton={{ color: 'blue', fontSize: '15px' }}>
                        </ButtonComponent>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetailComponent
