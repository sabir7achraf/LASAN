package org.example.backend2.controllers;

import org.example.backend2.entity.AuthRequest;
import org.example.backend2.services.AthleteService;
import org.example.backend2.services.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class login {

    public AuthenticationManager authenticationManager;

    @Autowired
    public JwtService jwtService;

    @Autowired
    public AthleteService  athleteService;

    public String  loginwithJtw(AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.email(), authRequest.password())
            );
        } catch (Exception e) {
            throw new Exception("Invalid username/password");
        }

        final UserDetails userDetails = athleteService.loadUserByUsername(authRequest.email());
        return jwtService.generate(userDetails.getUsername());

    }
}
