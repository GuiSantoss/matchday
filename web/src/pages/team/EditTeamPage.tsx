import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/Button";

export default function EditTeamPage() {

    const [teamId, setTeamId] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [photoUrl, setPhotoUrl] = useState<string>('');


    const navigate = useNavigate();
    const { id } = useParams();
    const teamIdToFetch = id ? parseInt(id, 10) : 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getTeamDataById(teamIdToFetch);
                setTeamId(response.data.id!)
                setName(response.data.name)
                setState(response.data.state)
                setPhotoUrl(response.data.photoUrl)
            } catch (error) {
                console.log('Erro ao buscar dados do time:', error);
            }
        }
        fetchData();
    }, []);

    const handleUpdateTeam = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.editTeam({id : teamId, name, state, photoUrl})

            setName('')
            setState('')
            setPhotoUrl('')

            navigate('/team/list')
        } catch (error) {
            console.log('Erro ao adicionar time', error);
        }
    }

    return (
        <>
            <Navbar />

            <Container>
                <Title title="Editar time"/>

                <form onSubmit={handleUpdateTeam}>
                    <Input value={name} label="Nome do time" onChange={(e) => setName(e.target.value)}/>
                    <Input value={state} label="Estado do time" onChange={(e) => setState(e.target.value)}/>
                    <Input value={photoUrl} label="Foto do time (Url)" onChange={(e) => setPhotoUrl(e.target.value)}/>

                    <Button type="submit" name="Editar"/>
                </form>
            </Container>
        </>
    )
}