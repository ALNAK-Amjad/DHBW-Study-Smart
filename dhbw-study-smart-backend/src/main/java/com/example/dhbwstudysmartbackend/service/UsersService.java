package com.example.dhbwstudysmartbackend.service;

import com.example.dhbwstudysmartbackend.entity.userDTOs.LoginUserDTO;

public interface UsersService {

    public LoginUserDTO verifyUser(String email, String password);
}
