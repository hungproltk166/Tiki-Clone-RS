import { Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './styled'
import Search from 'antd/es/transfer/search'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader >
                <Col span={6} >
                    <WrapperTextHeader>
                        HUNGLEESHOP
                    </WrapperTextHeader>
                </Col>
                <Col span={12} >
                    <ButtonInputSearch
                        size="large"
                        bordered={false}
                        textButton="tim kiem"
                        placeholder="input search text"

                    /></Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}  >
                    <WrapperHeaderAccount >
                        <UserOutlined style={{ fontSize: '20px' }} />
                        <div>
                            <WrapperTextHeaderSmall>
                                Đăng nhập/Đăng ký
                            </WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>
                                    Tài khoản
                                </WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontsize: '30px', color: '#fff' }} />
                        <WrapperTextHeaderSmall>
                            Giỏ hàng
                        </WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div >
    )
}

export default HeaderComponent
