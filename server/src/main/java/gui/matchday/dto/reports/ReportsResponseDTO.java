package gui.matchday.dto.reports;

import gui.matchday.model.Team;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ReportsResponseDTO {

    private Integer matchesQuantity;
    private Integer winsQuantity;
    private Double winPercentage;
    private Team mostWatchedTeam;
    private Integer daysWithoutWatching;


}
