import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const [valueInput] = useState('')
    const { placeholder, ...rests } = props
    return (
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} />
    )
}

export default InputForm
