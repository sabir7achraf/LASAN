package org.example.backend2.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Table
@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Roles implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING) //is used to store the enum value as a string in the database.
    private Authority  authority;

    @Override
    public String getAuthority() {
        return authority.name();  // Return the enum value as a string
    }

}
