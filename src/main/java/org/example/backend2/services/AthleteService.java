package org.example.backend2.services;

import org.example.backend2.Repository.AthleteRepo;
import org.example.backend2.entity.Athlete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class AthleteService implements UserDetailsService {
    @Autowired
    public AthleteRepo athleteRepo;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
       Optional<Athlete> athlete= athleteRepo.findByAthletename(email);
       Athlete athlete1 = athlete.orElseThrow(() -> new UsernameNotFoundException("Athlete not found with email: " + email));
        return  null;
    }
}
