package gui.matchday.service;

import gui.matchday.dto.reports.ReportsResponseDTO;
import gui.matchday.model.Match;

import gui.matchday.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service

public class ReportsService {

    @Autowired
    MatchRepository matchRepository;

public ReportsResponseDTO getAllReports(){
    Integer matchesQuantity = getMatchesQuantity();
    Integer winsQuantity = getWinsQuantity();
    return new  ReportsResponseDTO(matchesQuantity,winsQuantity);
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
}
