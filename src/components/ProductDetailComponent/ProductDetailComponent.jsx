import { Col, Row, Image } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/product1.jpg'
const ProductDetailComponent = () => {
    return (
        <div>
            <Row    >
                <Col span={10}>
                    <Image src={imageProduct} alt='image product' preview='false' />
                </Col>
                <Col span={14}>col-12</Col>
            </Row>
        </div>
    )
}

export default ProductDetailComponent
