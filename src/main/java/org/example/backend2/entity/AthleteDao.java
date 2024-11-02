package org.example.backend2.entity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class AthleteDao {
    private Integer id;
    @NotBlank(message = "Username cannot be blank")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    @Pattern(regexp = "^[a-zA-Z0-9_]*$", message = "Username can only contain letters, numbers, and underscores")
    private String athleteName;

    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Email should be valid")
    private String email;


//    @NotBlank(message = "Password cannot be blank")
//    @Size(min = 6, max = 40, message = "Password must be between 6 and 40 characters")
//    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,40}$",
//            message = "Password must contain at least one digit, one lowercase letter, one uppercase letter")
//    private String password ;

    private float height;

    private  float weight;

    @Size(min=10, max=10)
     private String phone;
}
