package gui.matchday.controller;


import gui.matchday.model.Match;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/match")
public class MatchController {

    @GetMapping("/all")
    public String getAllMatches(){
        return "";
    }

    @GetMapping("{id}")
    public String getMatchById(@PathVariable("id") Long id){
        return "";
    }

    @PostMapping
    public String addMatch(@RequestBody Match match) {
        return "";
    }

    @PutMapping
    public String updateMatch(@RequestBody Match match){
        return "";
    }

    @DeleteMapping("{id}")
    public String deleteTeam(@PathVariable("id") Long id){
        return "";
    }
}
