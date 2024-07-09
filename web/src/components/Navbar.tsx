import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import GridViewIcon from  '@mui/icons-material/GridView';
import SportsSoccerIcon from  '@mui/icons-material/SportsSoccer';
import SportsIcon from  '@mui/icons-material/Sports';


const HeaderContainer =  styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        height: 100px;
        background-color: #151515;
        color: #fff;
`

const Title = styled.h1`
        margin: 0;
        font-family: 'MonteCarlo', cursive;
        font-size: 40px;
        color: white;
        user-select: none;
        cursor: pointer;
        transition: 0.3s ease;

        &:hover {
            padding: 0.2rem;
            color: #c9c8c7
        }
`

const MenuButton = styled.button`
        background: none;
        border: none;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
`

const NavbarContainer = styled.nav<{ isOpen: boolean}>`
        display: ${({ isOpen}) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        align-items;
        position: absolute;
        top: 140px;
        left: 0px;
        width: 250px;
        height: 100vh;
        background-color: #1f1f1f;
        color: #fff;
        padding: 10px;
        z-index: 10000;
        
`

const ItemTitle = styled.div<{ isClickable: boolean}>`
        display: flex;
        padding: 8px;
        cursor: ${({ isClickable}) => (isClickable ? 'pointer' : '')};
        font-family: 'Futura';
        font-weight: bold;
        font-size: 20px;
        margin-top: 12px;
        transition: 0.4s ease;
        text-transform: uppercase;

        &:hover {
            background-color: ${({ isClickable}) => (isClickable ? '#444' : '')};
            border-radius: ${({ isClickable}) => (isClickable ? '7px' : '')};
            user-select: none;
            border-radius: 7px;
        }

        & > svg {
            margin-right: 8px;
        }
`

const ItemLabel = styled(Link)`
        padding: 8px;
        cursor: pointer;
        font-family: 'Futura';
        font-weight: lighter;
        font-size: 20px;
        color: #646363;
        text-decoration: none;
        margin-left: 31px;
        transition: 0.4s ease;

        &:hover {
            background-color: #444;
            border-radius: 7px;
            color: white;
        }
`

const TitleDiv = styled(Link)`
        display: flex;
        text-align: center;
        justify-content: center;
        text-decoration: none;
        color: white;
`


const Navbar: React.FC = () =>{

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <HeaderContainer>
                <MenuButton onClick={toggleMenu}>&#9776;</MenuButton>
                <Title onClick={toggleMenu}>Match Day</Title>
            </HeaderContainer>

            <NavbarContainer isOpen={isMenuOpen}>

                <TitleDiv to="/reports">
                    <ItemTitle isClickable={true}>
                        <GridViewIcon />
                        Resumo
                    </ItemTitle>
                </TitleDiv>

                <ItemTitle isClickable={false}>
                        <SportsSoccerIcon />
                        Times
                    </ItemTitle>        

                    <ItemLabel to='/team/add'>Adicionar Times</ItemLabel>      
                    <ItemLabel to='/team/list'>Listar Times</ItemLabel>      


                <ItemTitle isClickable={false}>
                        <SportsIcon />
                        Partidas
                    </ItemTitle>        

                    <ItemLabel to='/match/add'>Adicionar Partida</ItemLabel>      
                    <ItemLabel to='/match/list'>Listar Partidas</ItemLabel>      

            </NavbarContainer>
        </>
    )
}


export default Navbar;