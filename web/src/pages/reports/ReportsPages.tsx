import { useEffect, useState } from "react";
import BiggerCard from "../../components/BiggerCard";
import Card from "../../components/Card";
import CardContainer from "../../components/CardContainer";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import { ReportsData } from "../../interfaces/ReportsData";
import api from "../../services/api";

export default function ReportsPage(){

    const [data, setData] = useState<ReportsData>();
    const [days, setDays] = useState<string>('0 dias');

    useEffect (() => {
        const fetchData = async () => {
            try{
                const response = await api.getReportsData();
                setData(response.data);

                if (response.data.daysWithoutWatching > 1 || response.data.daysWithoutWatching === 0) {
                    setDays(response.data.daysWithoutWatching + ' dias')
                }else {
                    setDays(response.data.daysWithoutWatching + ' dia')                }


            } catch (error) {
                console.log('Erro ao buscar dados do resumo:', error)
            }
        }
            fetchData();
    }, []);

    return(
        <>
            <Navbar />

            <Container>
            <Title title="Resumo do seu diário de torcedor!"/>
           
            <CardContainer> 
             <Card value={data?.matchesQuantity} description="partidas"/>
             <Card value={data?.winsQuantity} description="vitorias"/>
             <Card value={data ? data.winPercentage + '%' : '0%'} description="de aproveitamento"/>

             <BiggerCard teamUrl={data?.mostWatchedTeam.photoUrl} teamName={data?.mostWatchedTeam.name} description="o time que você mais acompanha" />
             <BiggerCard value={days} description="sem acompanha partida" />
            </CardContainer>

            </Container>

        </>
    )

    
}