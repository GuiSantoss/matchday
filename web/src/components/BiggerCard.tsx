import styled from "styled-components"

const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 380px;
        width: 830px;
        background-color: #F3F2F2;
        border-radius: 12px; 
        
        @media (max-width: 1614px){
            width: 650px;
        }

        @media (max-width: 1500px){
            width: 600px;
        }

        @media (max-width: 1391px){
            width: 500px;
        }

        @media (max-width: 1161px){
            width: 450px;
        }

        @media (max-width: 1046px){
            width: 100%;
        }
`

const ValueDiv = styled.div`
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    font-size: 96px;
    padding: 10px;
`

const DescritpionDiv = styled.div`
    display: flex;
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    padding: 10px;

        @media (max-width: 400px){
            font-size: 13px;
        }

        @media (max-width: 1288px){
            font-size: 10px;
        }

`

const TeamPhotoimg = styled.img`
    width: 120px;
    padding: 10px;
`

const TeamNameDiv = styled.div`
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 20px;
`


interface BiggerCardProps {
    value?: number | string,
    teamUrl?: string,
    teamName?: string,
    description: string
}


export default function BiggerCard(props : BiggerCardProps) {
    return(
        <CardContainer>
            {props.value && <ValueDiv>{props.value}</ValueDiv>}
            {props.teamUrl && <TeamPhotoimg src={props.teamUrl}></TeamPhotoimg>}
            {props.teamName && <TeamNameDiv>{props.teamName}</TeamNameDiv>}
            <DescritpionDiv>{props.description}</DescritpionDiv>

        </CardContainer>
    )
}
