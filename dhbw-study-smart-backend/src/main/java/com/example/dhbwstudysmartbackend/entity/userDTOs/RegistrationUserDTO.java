package com.example.dhbwstudysmartbackend.entity.userDTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
public class RegistrationUserDTO {
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private int studentNumber;
}
