import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({ size, styleButton, styleTextButton, colorButton, textButton, ...rests }) => {
    return (

        <Button
            size={size}
            style={styleButton}
            // icon={<SearchOutlined color={colorButton} />}
            {...rests}
        >
            <span style={styleTextButton} >
                {textButton}
            </span>
        </Button>

    )
}

export default ButtonComponent

