import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextValue } from './style'

const NavBarComponent = () => {
    const renderContent = (type, options) => {
        switch (type) {
            case 'name':
                return options.map((option) => {
                    return (
                        <WrapperTextValue >
                            {option}
                        </WrapperTextValue>
                    )
                })
            default:
                return {};
        }
    }
    return (
        <div>
            <WrapperLabelText> Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('name', ['tu lanh', 'TV', 'may giat'])}
            </WrapperContent>
        </div>
    )
}

export default NavBarComponent
