package org.example.backend2.security;

import jakarta.transaction.Transactional;
import org.example.backend2.entity.Athlete;
import org.example.backend2.services.AthleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
@Transactional
public class JwtService {

    @Autowired
    public  AthleteService athleteService;

    final String SecretKey="2722e6648a2a10ba4b772d7f6c9ad5ca9a5fb1b7791e5be35fcfcb11ddf76a7f";

    public String generate(String email){
        final String barear = generateJwt(email);
        return  barear;
    }
    public UserDetails loadbyUserName(String email){
        return this.athleteService.loadUserByUsername(email);
    }

    private String generateJwt(String email) {
        final long currentTime = System.currentTimeMillis();
        final long expirationTime =currentTime+30*60*1000;

        Map<String, Object> claims = Map.of( Claims.SUBJECT, email,Claims.EXPIRATION,new Date(expirationTime));

        String barear = Jwts.builder().
                setIssuedAt(new Date(currentTime))
                .setExpiration(new Date(expirationTime))
                .setSubject(email)
                .setClaims(claims)
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
        return barear;
    }

    private Key getKey() {
        byte[] decode = Decoders.BASE64.decode(SecretKey);
        return Keys.hmacShaKeyFor(decode);
    }

    public String loadUserName(String token) {
        return this.getClaim(token ,Claims::getSubject);
    }

    private <T> T getClaim(String token, Function<Claims,T> function ) {
        Claims claims=  getAllClaims(token);
        return function.apply(claims);
    }
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return getAllClaims(token).getExpiration();
    }

    private Claims getAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(this.getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

}
