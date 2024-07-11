import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/input";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


export default function AddTeamPage(){

    const [name, setName] = useState<string>('');   
    const [state, setState] = useState<string>('');   
    const [photoUrl, setPhotoUrl] = useState<string>('');   

    const navigate = useNavigate();

    const handleAddTeam = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.addTeam({name, state, photoUrl})

            setName('')
            setState('')
            setPhotoUrl('')

            navigate('/team/list')

        }catch (error) {
            console.log('Erro ao adicionar time', error);
        }
        
    }

    return(
         <>
        <Navbar />

        <Container>
            <Title title="Adicionar time"/>

        <form onSubmit={handleAddTeam} >
            <Input label="Nome do time" onChange={(e) => setName(e.target.value)}/>
            <Input label="Estado do time" onChange={(e) => setState(e.target.value)}/>
            <Input label="Foto do time (URL)" onChange={(e) => setPhotoUrl(e.target.value)}/>

            <Button type='submit' name="Adicionar"></Button>
        </form>
        </Container>

    </>
    )
}