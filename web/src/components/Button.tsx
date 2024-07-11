import { ButtonHTMLAttributes } from "react";
import styled from "styled-components"


const ButtonStyled = styled.button`
    background-color: #000;
    color: white;
    border-radius: 20px;
    font-family: 'Futura';
    text-transform: uppercase;
    width: 260px;
    height: 55px;
    border: none;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: #424242;
    }
        
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;

}

export default function Button(props : ButtonProps) {
    return (
        <ButtonStyled>
            {props.name}
        </ButtonStyled>
    )
}