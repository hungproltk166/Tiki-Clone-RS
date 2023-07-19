import { Col, Row, Image } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/product1.jpg'
import imageProductSmall from '../../assets/images/product1small.jpg'
import imageProductSmall01 from '../../assets/images/product1small01.jpg'
import {
    WrapperPriceProduct,
    WrapperPriceTextProduct,
    WrapperStyleColSamll,
    WrapperStyleImageSmall,
    WrapperStyleNameProduct,
    WrapperStyleTextSell
} from './style'
import { StarFilled } from '@ant-design/icons'

const ProductDetailComponent = () => {
    return (
        <div>
            <Row style={{ padding: '16px', background: '#fff' }}  >
                <Col span={10}>
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
                <Col span={14}>
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
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetailComponent
