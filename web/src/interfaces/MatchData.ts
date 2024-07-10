import { TeamData } from "./TeamData";

export interface MatchData{
    id?: number;
    date: Date;
    scoreTeamOne: number;
    scoreTeamTwo: number;
    teamOne: TeamData;
    teamTwo: TeamData;
    supportedTeam: TeamData;
}