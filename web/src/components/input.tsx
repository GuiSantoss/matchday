import { InputHTMLAttributes } from "react"
import styled from "styled-components"

const InputDiv = styled.div`
    width? 92%;

`


const LabelStyled = styled.p`
    font-family: 'Futura';
    color: #000;
    text-transform: uppercase;
    font-weight: lighter;
`

const InputStyled = styled.input`
    font-family: 'Futura';
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: #EFEFEE;
    color: #000;
    outline: none;
    font-size: 16px;
    margin-bottom: 26px;
    transition: 0.3s ease;
    
    &:hover{
        background-color: #E3E3E3;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}


export default function Input(props: InputProps) {
    return(
        <InputDiv>
            <LabelStyled>{props.label}</LabelStyled>
            <InputStyled {...props}/>
        </InputDiv>

    )
}