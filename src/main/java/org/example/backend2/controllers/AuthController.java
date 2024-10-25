package org.example.backend2.controllers;

import jakarta.validation.Valid;
import org.example.backend2.entity.AthleteDao;
import org.example.backend2.entity.AuthRequest;
import org.example.backend2.services.AthleteService;
import org.example.backend2.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public String  login(AuthRequest authRequest) throws Exception {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.email(),authRequest.password()));
        if(authenticate.isAuthenticated()){
            return  this.jwtService.generate(authRequest.email());
        }
        return null;
    }

    @PostMapping("/signUp")
    public ResponseEntity<?> registre(@Valid @RequestBody AthleteDao athleteDao){
        if (athleteService.existsByEmail(athleteDao.getEmail())){
            return ResponseEntity.badRequest().body("Error: Email is already taken!");
        }
        athleteService.registreNewUser(athleteDao);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(athleteDao.getEmail(), athleteDao.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        Map<String ,String> response = new HashMap<>();
                String jwt =jwtService.generate(athleteDao.getEmail());
        response.put("token", jwt);
        return ResponseEntity.ok(response);
    }
}
