import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CartComponent from '../../components/CartComponent/CartComponent'
import { Col, Row } from 'antd'

const TypeProductPage = () => {
    return (
        <div>
            <Row style={{ padding: '0 120px', background: '#efefef', flexWrap: 'nowrap', paddingTop: '10px' }}>
                <Col span={4} style={{ color: '#fff', marginRight: '10px', padding: '10px', borderRadius: '6px' }}>
                    <NavBarComponent />
                </Col>
                <Col span={20}>
                    <CartComponent />
                </Col>
            </Row>
        </div>
    )
}

export default TypeProductPage
