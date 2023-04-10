import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as logoImg} from "../../assets/icons/logo.svg"

export const Container=styled.div``
export const Wrapper=styled.div`
    width:100%
    max-width:1440px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:var(--colorPrimary);
    color:#fff;
    padding:var(--padding);
    height:64px;
`
export const Section=styled.div`
    display:flex;
    align-items:center;
    cursor:${({logo})=>logo && "pointer"};
    .active{
    color:#b8ff06;
`
export const Logo=styled(logoImg)`
    width:30px;
    margin-right:12px;
    & path{
        fill:#fff;
    }
`
const Link=styled(NavLink)`
    text-decoration:none;
    padding:0 32px;
    color:white;

`
export {Link};

