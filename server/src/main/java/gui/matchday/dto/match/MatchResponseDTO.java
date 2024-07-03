package gui.matchday.dto.match;

import gui.matchday.model.Match;
import gui.matchday.model.Team;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class MatchResponseDTO {

    private Long id;
    private Date date;
    private Integer scoreTeamOne;
    private Integer scoreTeamTwo;
    private Team teamOne;
    private Team teamTwo;
    private Team supportedTeam;

    public MatchResponseDTO(Match match) {
        this(match.getId(), match.getDate(), match.getScoreTeamOne(),
            match.getScoreTeamTwo(), match.getTeamOne(), match.getTeamTwo(), match.getSupportedTeam());}
}
