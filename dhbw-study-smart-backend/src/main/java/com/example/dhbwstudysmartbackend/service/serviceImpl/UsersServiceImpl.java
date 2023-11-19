package com.example.dhbwstudysmartbackend.service.serviceImpl;

import com.example.dhbwstudysmartbackend.entity.userDTOs.LoginUserDTO;
import com.example.dhbwstudysmartbackend.entity.userDTOs.VerifyUserDTO;
import com.example.dhbwstudysmartbackend.repository.UserRepository;
import com.example.dhbwstudysmartbackend.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UsersServiceImpl implements UsersService {
    private final UserRepository userRepo;

    @Autowired
    public UsersServiceImpl(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public LoginUserDTO verifyUser(String email, String password) {
        if (userRepo.getUsersByEmail(email) != null){
            VerifyUserDTO user = userRepo.getUsersByEmail(email);
            if (Objects.equals(user.getPassword(), password)){
                return new LoginUserDTO(true,user.getUserId());
            }else {
                return new LoginUserDTO(false , null);
            }
        }
            return new LoginUserDTO(false, null);
    }

}
