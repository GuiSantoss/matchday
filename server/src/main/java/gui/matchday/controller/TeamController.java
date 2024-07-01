package gui.matchday.controller;

import gui.matchday.dto.team.TeamRequestDTO;
import gui.matchday.dto.team.TeamResponseDTO;
import gui.matchday.model.Team;
import gui.matchday.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping("/all")
    public List<Team> getAllTeams(){
        return teamService.getAllTeams();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamResponseDTO> getTeamById(@PathVariable("id") Long id){
        return ResponseEntity.ok(teamService.getTeamById((id)));
    }

    @PostMapping
    public ResponseEntity<Team> addTeam(@RequestBody TeamRequestDTO teamRequestDTO) {
        return ResponseEntity.ok(teamService.registerTeam(teamRequestDTO));    }

    @PutMapping
    public String updateTeam(@RequestBody Team team){
        return "";
    }

    @DeleteMapping("/{id}")
    public String deleteTeam(@RequestParam("id") Long id){
        return "";
    }
}
