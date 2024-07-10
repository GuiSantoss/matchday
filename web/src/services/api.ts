import axios, {AxiosResponse} from "axios";
import { ReportsData } from "../interfaces/ReportsData";
import { TeamData } from "../interfaces/TeamData";
import { MatchData } from "../interfaces/MatchData";

interface Api{
    getReportsData: () => Promise<AxiosResponse<ReportsData>>;

    getTeamData: () => Promise<AxiosResponse<TeamData[]>>;
    getTeamDataById: (id: number) => Promise<AxiosResponse<TeamData>>;
    addTeam: (TeamData : TeamData) => Promise<AxiosResponse<any>>;
    editTeam: (TeamData : TeamData) => Promise<AxiosResponse<any>>;
    deleteTeam: (id: number) => Promise<AxiosResponse<any>>;

    getMatchData: () => Promise<AxiosResponse<MatchData[]>>; 
    getMatchDataById: (id: number) => Promise<AxiosResponse<MatchData>>; 
    addMatch: (TeamData : TeamData) => Promise<AxiosResponse<any>>;
    editMatch: (TeamData : TeamData) => Promise<AxiosResponse<any>>;
    deleteMatch: (id: number) => Promise<AxiosResponse<any>>;
    
}

const instace = axios.create ({
    baseURL:'http://localhost:8080/api',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
});

const api: Api = {
    getReportsData: () => instace.get('/reports'),

    getTeamData: () => instace.get('/team/all'),
    getTeamDataById: (id: number) => instace.get(`/team/${id}`),
    addTeam: (TeamData : TeamData) => instace.post('/team', TeamData),
    editTeam: (TeamData : TeamData) => instace.put('/team', TeamData),
    deleteTeam: (id: number) => instace.delete(`/team/${id}`),

    getMatchData: () => instace.get('/match/all'),
    getMatchDataById: (id: number) => instace.get(`/match/${id}`),
    addMatch: (TeamData : TeamData) => instace.post('/match', TeamData),
    editMatch: (TeamData : TeamData) => instace.put('/match', TeamData),
    deleteMatch: (id: number) => instace.delete(`/match/${id}`),

};

export default api;