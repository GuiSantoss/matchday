package gui.matchday.repository;


import gui.matchday.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {

}
