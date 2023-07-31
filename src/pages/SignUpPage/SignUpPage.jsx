import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from '../SignInPage/style'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import ImageLogoSignin from '../../assets/images/logo-signin.png'
import InputForm from '../../components/InputForm/InputForm'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'



const SignUpPage = () => {
    const [isShowPassWord, setIsShowPassWord] = useState(false)

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập vào tài khoản</p>
                    <InputForm style={{ marginBottom: '10px' }} placeholder='abc@gmail.com' />
                    <div style={{ position: 'relative' }}>
                        <span style={{ zIndex: 10, position: 'absolute', top: '4px', right: '8px' }}>
                            {isShowPassWord ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
                        </span>
                        <InputForm placeholder="password" type={isShowPassWord ? 'text' : 'password'} />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span style={{ zIndex: 10, position: 'absolute', top: '4px', right: '8px' }}>
                            {isShowPassWord ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
                        </span>
                        <InputForm placeholder="confirm password" type={isShowPassWord ? 'text' : 'password'} />
                    </div>
                    <ButtonComponent
                        size={40}
                        bordered={false}
                        styleButton=
                        {{
                            backgroundColor: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '100%',
                            borderRadius: '4px',
                            border: 'none',
                            marginTop: '26px',
                            marginBottom: '10px'
                        }}
                        textButton={'Đăng ký'}
                        styleTextButton={{ color: '#fff', fontWeight: '700' }}>
                    </ButtonComponent>
                    <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <img src={ImageLogoSignin} preview={false} alt='image-logo' height='203px' width='203px' />
                    <h4>Mua sắm tại LTTD</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignUpPage
