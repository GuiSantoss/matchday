import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import TeamTable from "../../components/TeamTable";
import Title from "../../components/Title";
import { TeamData } from "../../interfaces/TeamData";
import api from "../../services/api";

export default function TeamListPage(){

    const [data, setData] = useState<TeamData[]>([]);

    useEffect (() => {
        const fetchData = async () => {
            try{
                const response = await api.getTeamData();
                setData(response.data);
            } catch (error) {
                console.log('Erro ao buscar dados dos times:', error)
            }
        }
            fetchData();
    }, []);

    return (
    <>
        <Navbar />

        <Container>
            <Title title="Times registrados"/>

            <TeamTable teams={data}/>
        </Container>
    </>
    )
}