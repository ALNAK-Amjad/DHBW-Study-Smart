package com.example.dhbwstudysmartbackend.entity.userDTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegistrationUserDTO {
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private Long studyProgramId;
    private Long courseId;
    private Long semesterId;
    private int studentNumber;
}
