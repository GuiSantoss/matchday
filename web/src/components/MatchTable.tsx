import styled from "styled-components"
import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { MatchData } from "../interfaces/MatchData"
import { format } from 'date-fns'

const TableStyled = styled.table`
    width: 100%;
    border-collapse: collapse;
    overflow: auto;   
`

const TheadStyled = styled.thead`
    background-color: #EFEFEE;

`

const ThStyled = styled.th`
    font-family: 'Futura';
    background-color: #EFEFEE;
    text-transform: uppercase;
    border: 1px solid #ddd;

`

const TdStyled = styled.td`
    font-family: 'Futura';
    background-color: #EFEFEE;
    color: black;
    text-align: center;
    text-transform: uppercase;
    height: 150px;
    font-size: 25px;
    border: 1px solid #ddd;
    
    `

    const ScoreContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

    `

    const ScoreLabel = styled.label`
        padding: 10px
    `

interface MatchTableProps {
    matches: MatchData[];
}


export default function MatchTable(props: MatchTableProps) {
    return (
        <TableStyled>
            <TheadStyled>
                <tr>
                    <ThStyled>Id</ThStyled>
                    <ThStyled>Partida</ThStyled>
                    <ThStyled>Sua Torcida</ThStyled>
                    <ThStyled>Data</ThStyled>
                    <ThStyled>Ações</ThStyled>
                </tr>
            </TheadStyled>
            <tbody>
                {props.matches.map((match : MatchData) => (
                <tr key={match.id}>
                     <TdStyled>{match.id}</TdStyled>
                     <TdStyled>
                        <ScoreContainer>
                            <img src={match.teamOne.photoUrl} alt={match.teamOne.name} style={{width: '120px', padding: '10px'}}/>

                            <ScoreLabel>{match.scoreTeamOne}</ScoreLabel>
                            &nbsp;&nbsp;X&nbsp;&nbsp;
                            <ScoreLabel>{match.scoreTeamTwo}</ScoreLabel>
                            
                            <img src={match.teamTwo.photoUrl} alt={match.teamTwo.name} style={{width: '120px', padding: '10px'}}/>

                        </ScoreContainer>
                     </TdStyled>
                     <TdStyled> <img src={match.supportedTeam.photoUrl} alt={match.supportedTeam.name} style={{width: '70px', padding: '10px'}}/>
                     </TdStyled>
                     <TdStyled>{format(new Date(match.date), 'dd/MM/yyyy')}</TdStyled>
                     <TdStyled>
                         <IconButton>
                             <EditIcon />
                         </IconButton>
                         <IconButton>
                             <DeleteIcon />
                         </IconButton>
                     </TdStyled>
 
                 </tr>
                ))}
               
            </tbody>
        </TableStyled>

    )
}