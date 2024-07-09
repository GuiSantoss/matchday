import styled from "styled-components"

const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 530px;
        background-color: #F3F2F2;
        border-radius: 12px; 
        
        @media (max-width: 1578px){
            width: 350px;
        }

        @media (max-width: 1367px){
            width: 330px;
        }

        @media (max-width: 1197px){
            width: 280px;
        }

        @media (max-width: 1010px){
            width: 350px;
        }

        @media (max-width: 818px){
            width: 100%;
        }
`

const ValueDiv = styled.div`
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    font-size: 96px;
`

const DescritpionDiv = styled.div`
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
`

interface CardProps{
    value?: number | string,
    description: string
}


export default function Card(props : CardProps) {
    return(
        <CardContainer>
            <ValueDiv>{props.value ?? 0}</ValueDiv>
            <DescritpionDiv>{props.description}</DescritpionDiv>

        </CardContainer>
    )
}
