import logo from '../../assets/images/logo.png'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDisscountText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'


const CartComponent = () => {
    return (
        <WrapperCardStyle
            headStyle={{ width: '200px', height: '200px' }}
            bodyStyle={{ padding: '10px' }}
            hoverable
            style={{ width: 200 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img src={logo} style={{ with: '68px', height: '14px', position: 'absolute', top: '-1px', left: '-1px   ', borderTopLeftRadius: '3px' }} />
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span> 4.96 </span>
                    <StarFilled style={{ fontSize: '12px', color: 'red ' }} />
                </span>
                <WrapperStyleTextSell> | đã bán 1000 sản phẩm  </WrapperStyleTextSell>
                <WrapperPriceText>
                    19.000.000đ
                    <WrapperDisscountText>
                        -26%
                    </WrapperDisscountText>
                </WrapperPriceText>

            </WrapperReporText>
        </WrapperCardStyle>
    )
}

export default CartComponent
