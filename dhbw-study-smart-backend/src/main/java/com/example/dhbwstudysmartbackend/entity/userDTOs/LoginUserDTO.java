package com.example.dhbwstudysmartbackend.entity.userDTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginUserDTO {
    private boolean verified;
    private Long userId;
}
