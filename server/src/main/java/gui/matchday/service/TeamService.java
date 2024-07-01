package gui.matchday.service;

import gui.matchday.dto.team.TeamResponseDTO;
import gui.matchday.model.Match;
import gui.matchday.model.Team;
import gui.matchday.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeamService {

    @Autowired
   private TeamRepository teamRepository;

    public TeamResponseDTO getTeamById(final Long id){
        Optional<Team> response = teamRepository.findById(id);

        return response.map(TeamResponseDTO::new).orElseGet(TeamResponseDTO::new);
    }
}
