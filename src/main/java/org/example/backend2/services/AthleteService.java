package org.example.backend2.services;

import org.example.backend2.Repository.AthleteRepo;
import org.example.backend2.Repository.RoleRepository;
import org.example.backend2.entity.Athlete;
import org.example.backend2.entity.AthleteDao;
import org.example.backend2.entity.Authority;
import org.example.backend2.entity.Roles;
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
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.getEmail(),
                        user.getPassword(),
                        user.getAuthorities()
                ))
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
    public Boolean existsByEmail(String username){
        return athleteRepo.existsByEmail(username);
    }


    public void  registreNewUser(AthleteDao athleteDao){
     Athlete user = new Athlete();
     user.setAthletename(athleteDao.getAthleteName());
     user.setEmail(athleteDao.getEmail());
     user.setPassword(passwordEncoder.encode(athleteDao.getPassword()));
        Roles role = roleRepository.findByAuthority(Authority.ROLE_ATHLETE)
                .orElseThrow(() -> new RuntimeException("Role not found"));
        user.setRoles(List.of(role));
        athleteRepo.save(user);
    }

    public Optional<Athlete> findByemail(String email) {
        return athleteRepo.findByEmail(email);
    }
}
