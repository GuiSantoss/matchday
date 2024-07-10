import { TeamData } from "./TeamData";

export interface ReportsData{
      matchesQuantity: number;
      winsQuantity: number;
      winPercentage: number | string;
      mostWatchedTeam: TeamData;
      daysWithoutWatching: number;

}