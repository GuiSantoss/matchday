import styled from "styled-components"
import { TeamData } from "../interfaces/TeamData"
import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import api from "../services/api"
import { useNavigate } from "react-router-dom"

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

    const navigate = useNavigate();

    const handleEditTeam = async (e: React.FormEvent, teamId: number) => {
        e.preventDefault();

        navigate(`/team/edit/${teamId}`)
    };


    const handleDeleteTeam = async (e: React.FormEvent, teamId: number) => {
        e.preventDefault();

        try {
            await api.deleteTeam(teamId);
            window.location.reload();
        } catch (error) {
            console.log('Erro ao deletar time', error)
        }
    };
    
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
                         <IconButton onClick={(e: React.FormEvent) => handleEditTeam(e, team.id!)}>
                             <EditIcon />
                         </IconButton>
                         <IconButton onClick={(e: React.FormEvent) => handleDeleteTeam(e, team.id!)}>
                             <DeleteIcon />
                         </IconButton>
                     </TdStyled>
 
                 </tr>
                ))}
               
            </tbody>
        </TableStyled>

    )
}