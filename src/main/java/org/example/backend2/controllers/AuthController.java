package org.example.backend2.controllers;

import jakarta.validation.Valid;
import org.example.backend2.entity.Athlete;
import org.example.backend2.entity.AthleteDao;
import org.example.backend2.entity.AuthRequest;
import org.example.backend2.entity.SignRequest;
import org.example.backend2.services.AthleteService;
import org.example.backend2.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {
    @Autowired
    public AuthenticationManager authenticationManager;
    @Autowired
    public JwtService jwtService;
    @Autowired
    public AthleteService athleteService;
    @PostMapping("/login")
    public ResponseEntity<?>  login(@RequestBody AuthRequest authRequest) throws Exception {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.email(),authRequest.password()));
        if(authenticate.isAuthenticated()){

            String jwt = this.jwtService.generate(authRequest.email());
            Map<String, Object> response = new HashMap<>();
            response.put("token",jwt);
            return ResponseEntity.ok(response);
        }
        return null;
    }

    @PostMapping("/signUp")
    public ResponseEntity<?> registre(@Valid @RequestBody SignRequest signRequest){
        if (athleteService.existsByEmail(signRequest.email())){
            return ResponseEntity.badRequest().body("Error: Email is already taken!");
        }
        athleteService.registreNewUser(signRequest);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signRequest.email(), signRequest.password()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        Map<String ,String> response = new HashMap<>();
                String jwt =jwtService.generate(signRequest.email());
        response.put("token", jwt);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/athlete")
    public ResponseEntity<?> getAthlete(Authentication authentication){
        Athlete athlete = (Athlete) authentication.getPrincipal();
        Map<String, Object> userInfo = new HashMap<>();
        userInfo.put("athlete", athlete);
        userInfo.put("roles", athlete.getAuthorities());
        return ResponseEntity.ok(userInfo);
    }
    @PostMapping("/updateAthlete")
    public void AddUser( @RequestBody AthleteDao athlete) {

        this.athleteService.SaveAthlete(athlete);
    }
}
