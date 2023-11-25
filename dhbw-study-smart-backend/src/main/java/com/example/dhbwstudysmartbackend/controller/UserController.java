package com.example.dhbwstudysmartbackend.controller;

import com.example.dhbwstudysmartbackend.entity.Users;
import com.example.dhbwstudysmartbackend.entity.userDTOs.LoginUserDTO;
import com.example.dhbwstudysmartbackend.entity.userDTOs.RegistrationUserDTO;
import com.example.dhbwstudysmartbackend.service.UsersService;
import com.example.dhbwstudysmartbackend.service.serviceImpl.UsersServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UsersServiceImpl service;
    private final UsersService usersService;

    @Autowired
    public UserController(UsersServiceImpl service, UsersService usersService) {
        this.service = service;
        this.usersService = usersService;
    }

    @GetMapping("/verify")
    @ResponseBody
    public LoginUserDTO verifyUser(@RequestParam(name = "email") String email, @RequestParam(name = "password") String password){
       return service.verifyUser(email,password);
    }
    @PostMapping("/register")
    public Users registerUser(@RequestBody RegistrationUserDTO registrationUserDTO) {
        return usersService.registerUser(registrationUserDTO);
    }
}
