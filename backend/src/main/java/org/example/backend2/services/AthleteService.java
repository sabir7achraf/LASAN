package org.example.backend2.services;

import org.example.backend2.Repository.AthleteRepo;
import org.example.backend2.Repository.RoleRepository;
import org.example.backend2.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AthleteService implements UserDetailsService {
    @Autowired
    public AthleteRepo athleteRepo;

    @Autowired
    public RoleRepository roleRepository;

    @Autowired
    @Lazy
    public PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return athleteRepo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
    public Boolean existsByEmail(String username){
        return athleteRepo.existsByEmail(username);
    }
    public void  registreNewUser( SignRequest authRequest){
        ;
     Athlete user = new Athlete();
     user.setAthletename(authRequest.athleteName());
     user.setEmail(authRequest.email());
     user.setPassword(passwordEncoder.encode(authRequest.password()));
     Roles role = roleRepository.findByAuthority(Authority.ROLE_ATHLETE).orElseThrow(() -> new RuntimeException("Role not found"));
     user.setRoles(List.of(role));
     athleteRepo.save(user);
    }

    public void SaveAthlete(AthleteDao athletedao){
         Optional<Athlete> existing =  athleteRepo.findById(athletedao.getId());
         if(existing.isPresent()){
             Athlete athlete=existing.get();
             athlete.setEmail(athletedao.getEmail());
             athlete.setAthletename(athletedao.getAthleteName());
             athlete.setHeight(athletedao.getHeight());
             athlete.setWeight(athletedao.getWeight());
             athlete.setPhone(athletedao.getPhone());
             athleteRepo.save(athlete);
         }
    }



}
