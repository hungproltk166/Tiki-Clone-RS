import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)
    `paddinng: 10px 0px;
    background-color: rgb(26, 148, 255);
    align-items:center;
    gap:16px;
    flex-Wrap: nowrap;
    witdh:1270px;
    `



export const WrapperTextHeader = styled.span`
font-size:18px;
color: #fff;
font-weight:bold;
text-align: left;
 `

export const WrapperHeaderAccount = styled.div`
display : flex;
align-items:center;
color: #fff;
gap: 10px;
`
export const WrapperTextHeaderSmall = styled.span`
font-size:12px;
color:#fff;
white-space: nowrap;`
export const WrapperIconHeader = styled.span`
font-size:30px;
color:#fff;`