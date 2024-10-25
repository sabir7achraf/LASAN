package org.example.backend2.Repository;

import org.example.backend2.entity.Authority;
import org.example.backend2.entity.Roles;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RoleRepository extends CrudRepository<Roles, Integer> {

    public Optional<Roles> findByAuthority(Authority authority);

}


