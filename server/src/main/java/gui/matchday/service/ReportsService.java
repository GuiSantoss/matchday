package gui.matchday.service;

import gui.matchday.dto.reports.ReportsResponseDTO;
import gui.matchday.model.Match;

import gui.matchday.model.Team;
import gui.matchday.repository.MatchRepository;
import gui.matchday.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Objects;

@Service

public class ReportsService {

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private TeamRepository teamRepository;

public ReportsResponseDTO getAllReports(){
    Integer matchesQuantity = getMatchesQuantity();
    Integer winsQuantity = getWinsQuantity();
    Integer winPercentage = getWinPercentage();
    Team mostWatchedTeam = getMostWatchedTeam();
    Integer daysWithoutWatching = getDaysWithoutWatching();
    return new  ReportsResponseDTO(matchesQuantity,winsQuantity, winPercentage, mostWatchedTeam, daysWithoutWatching);
}

private Integer getMatchesQuantity(){
   return Math.toIntExact(matchRepository.count());

}
public Integer getWinsQuantity(){

    int winsQuantity =0;

    List<Match> matches = matchRepository.findAll();


    for (Match match : matches){

       Integer scoreTeamOne = match.getScoreTeamOne();
       Integer scoreTeamTwo = match.getScoreTeamTwo();

       Long teamWinnerId = 0L;

       if (scoreTeamOne > scoreTeamTwo){
           teamWinnerId = match.getTeamOne().getId();
          
       } else if (scoreTeamOne < scoreTeamTwo) {
            teamWinnerId = match.getTeamTwo().getId();
           
       }

       if (Objects.equals(match.getSupportedTeam().getId(), teamWinnerId)){
            winsQuantity +=1;
       }
    }
    return winsQuantity;

}

    public int getWinPercentage(){

        double winPercentage = 0;
        double wonPoints = 0;
        double totalPoints = 0;

        List<Match> matches = matchRepository.findAll();

        for (Match match : matches){

            Integer scoreTeamOne = match.getScoreTeamOne();
            Integer scoreTeamTwo = match.getScoreTeamTwo();

            Long teamWinnerId = 0L;

            if (scoreTeamOne > scoreTeamTwo){
                teamWinnerId = match.getTeamOne().getId();

            } else if (scoreTeamOne < scoreTeamTwo) {
                teamWinnerId = match.getTeamTwo().getId();

            }else {
                wonPoints += 1;
            }

            if (Objects.equals(match.getSupportedTeam().getId(), teamWinnerId)){
                wonPoints +=3;
            }
        totalPoints +=3;
        }

        if (totalPoints == 0){
            return 0;
        }

        winPercentage = (wonPoints / totalPoints) * 100;

        return (int) winPercentage;
    }

    public Team getMostWatchedTeam(){
        return teamRepository.getMostWatchedTeam();
}

    public Integer getDaysWithoutWatching() {
        return matchRepository.getDaysWithoutWatching();
    }
    }
