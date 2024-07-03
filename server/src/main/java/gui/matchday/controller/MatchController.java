package gui.matchday.controller;


import gui.matchday.dto.match.MatchRequestDTO;
import gui.matchday.dto.match.MatchResponseDTO;
import gui.matchday.model.Match;
import gui.matchday.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/match")
public class MatchController {

    @Autowired
    MatchService matchService;


    @GetMapping("/all")
    public List<Match> getAllMatches(){
        return matchService.getAllMatches();
    }

    @GetMapping("{id}")
    public ResponseEntity<MatchResponseDTO> getMatchById(@PathVariable("id") Long id){
        return ResponseEntity.ok(matchService.getMatchById(id));
    }

    @PostMapping
    public ResponseEntity<Match> addMatch(@RequestBody MatchRequestDTO matchRequestDTO) {
        return ResponseEntity.ok(matchService.registerMatch(matchRequestDTO));    }

    @PutMapping
    public ResponseEntity<Match> updateMatch(@RequestBody MatchRequestDTO matchRequestDTO){
        return ResponseEntity.ok(matchService.updateMatch(matchRequestDTO));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTeam(@PathVariable("id") Long id){
        matchService.deleteMatch(id);
        return ResponseEntity.ok("Partida deletada com sucesso.");
    }
}
