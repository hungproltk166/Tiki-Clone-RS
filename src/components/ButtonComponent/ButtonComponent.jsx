import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({ size, styleButton, styleTextButton, colorButton = '#fff', textButton, ...rests }) => {
    return (

        <Button
            size={size}
            style={styleButton}
            // icon={<SearchOutlined color={colorButton} />}
            {...rests}
        >
            <span style={{ color: colorButton }} >
                {textButton}
            </span>


        </Button>

    )
}

export default ButtonComponent

