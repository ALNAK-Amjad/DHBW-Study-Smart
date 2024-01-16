package com.example.dhbwstudysmartbackend.service;

import com.example.dhbwstudysmartbackend.entity.Users;
import com.example.dhbwstudysmartbackend.entity.userDTOs.LoginUserDTO;
import com.example.dhbwstudysmartbackend.entity.userDTOs.RegistrationUserDTO;

public interface UsersService {

    public LoginUserDTO verifyUser(String email, String password);
    public Users registerUser(RegistrationUserDTO registrationUserDTO);

}
