import React from 'react';
import { Checkbox, Rate } from 'antd';
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style';

const NavBarComponent = () => {
    const onChange = () => { };

    const renderContent = (type, options) => {
        switch (type) {
            case 'name':
                return options.map((option) => (
                    <WrapperTextValue key={option}>{option}</WrapperTextValue>
                ));

            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange} >
                        {options.map((option) => (
                            <Checkbox style={{ marginLeft: '0px' }} key={option.value} value={option.value}>
                                {option.label}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                );

            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex', }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`từ ${option} sao`}</span>
                        </div>
                    )
                })

            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>
                            {option}
                        </WrapperTextPrice>
                    )
                })
            default:
                return null;
        }
    };

    return (
        <div>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('name', ['tu lanh', 'TV', 'may giat'])}
            </WrapperContent>

        </div>
    );
};

export default NavBarComponent;
