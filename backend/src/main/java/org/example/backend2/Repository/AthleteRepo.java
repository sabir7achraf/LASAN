package org.example.backend2.Repository;

import org.example.backend2.entity.Athlete;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AthleteRepo extends CrudRepository<Athlete, Integer> {
    Optional<Athlete> findByAthletename(String athleteName);
    Boolean existsByAthletename(String athletename);
    Optional<Athlete> findByEmail(String email);
    Boolean existsByEmail(String email);

}
