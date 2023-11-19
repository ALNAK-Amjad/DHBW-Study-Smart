package com.example.dhbwstudysmartbackend.controller;

import com.example.dhbwstudysmartbackend.entity.userDTOs.LoginUserDTO;
import com.example.dhbwstudysmartbackend.service.serviceImpl.UsersServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UsersServiceImpl service;

    @Autowired
    public UserController(UsersServiceImpl service) {
        this.service = service;
    }

    @GetMapping("/verify")
    @ResponseBody
    public LoginUserDTO verifyUser(@RequestParam(name = "email") String email, @RequestParam(name = "password") String password){
       return service.verifyUser(email,password);
    }
}
