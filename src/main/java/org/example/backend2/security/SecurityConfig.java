package org.example.backend2.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/", "/home").permitAll() // (3)
                        .anyRequest().authenticated() // (4)
                )
                .formLogin(form -> form
                        .loginPage("/login") // (5)
                        .permitAll()
                )
                .logout(LogoutConfigurer::permitAll)
                .httpBasic(httpBasic -> httpBasic   // Nouvelle utilisation de httpBasic
                        .realmName("Custom Realm"));
                // (7)

        return http.build();
    }
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}

