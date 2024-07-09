import styled from "styled-components"

const CardContainerDiv = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;


`


interface CardContainerProps{
    children: React.ReactNode
}

export default function CardContainer(props : CardContainerProps) {
    return(
        <CardContainerDiv>
            {props.children}
        </CardContainerDiv>
    )
}
