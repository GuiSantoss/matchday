package gui.matchday.repository;


import gui.matchday.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {

    @Query(value = "SELECT CAST(EXTRACT(EPOCH FROM AGE(CURRENT_DATE, MAX(date))) / (60*60*24) AS INTEGER) FROM match", nativeQuery = true)
    Integer getDaysWithoutWatching();


}
