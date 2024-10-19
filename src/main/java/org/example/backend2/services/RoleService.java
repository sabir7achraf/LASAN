package org.example.backend2.services;

import jakarta.annotation.PostConstruct;
import org.example.backend2.Repository.RoleRepository;
import org.example.backend2.entity.Authority;
import org.example.backend2.entity.Roles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class RoleService {

    @Autowired
    private RoleRepository rolesRepository;

    @PostConstruct
    public void init() {
        if (rolesRepository.count() == 0) {  // Check if roles already exist
            rolesRepository.save(new Roles(null, Authority.ROLE_ATHLETE));
            rolesRepository.save(new Roles(null, Authority.ROLE_ADMIN));
            rolesRepository.save(new Roles(null, Authority.ROLE_FREE_TRIAL));
            rolesRepository.save(new Roles(null, Authority.ROLE_ADHERENT));
        }
    }
}
