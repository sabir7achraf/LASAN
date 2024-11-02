package org.example.backend2.entity;

import jakarta.persistence.*;

@Table
@Entity
public class Exercice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id ;
    public String exerciceName;
    public String exerciceDescription;
    public String imageExe;


}
