import styled from "styled-components"
import { TeamData } from "../interfaces/TeamData"
import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

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

interface TeamTableProps {
    teams: TeamData[];
}


export default function TeamTable(props: TeamTableProps) {
    return (
        <TableStyled>
            <TheadStyled>
                <tr>
                    <ThStyled>Id</ThStyled>
                    <ThStyled>id</ThStyled>
                    <ThStyled>Time</ThStyled>
                    <ThStyled>Estado</ThStyled>
                    <ThStyled>Ações</ThStyled>
                </tr>
            </TheadStyled>
            <tbody>
                {props.teams.map((team : TeamData) => (
                <tr key={team.id}>
                     <TdStyled>{team.id}</TdStyled>
                     <TdStyled>
                         <img src={team.photoUrl} alt={team.name} style={{width: '120px', padding: '10px'}}/>
                     </TdStyled>
                     <TdStyled>{team.name}</TdStyled>
                     <TdStyled>{team.state}</TdStyled>
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