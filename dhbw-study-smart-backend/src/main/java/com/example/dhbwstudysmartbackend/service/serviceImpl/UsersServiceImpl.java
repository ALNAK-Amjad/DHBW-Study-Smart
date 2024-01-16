package com.example.dhbwstudysmartbackend.service.serviceImpl;

import com.example.dhbwstudysmartbackend.entity.Users;
import com.example.dhbwstudysmartbackend.entity.userDTOs.LoginUserDTO;
import com.example.dhbwstudysmartbackend.entity.userDTOs.RegistrationUserDTO;
import com.example.dhbwstudysmartbackend.entity.userDTOs.VerifyUserDTO;
import com.example.dhbwstudysmartbackend.repository.CourseRepository;
import com.example.dhbwstudysmartbackend.repository.StudyProgramRepository;
import com.example.dhbwstudysmartbackend.repository.UserRepository;
import com.example.dhbwstudysmartbackend.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UsersServiceImpl implements UsersService {
    private final UserRepository userRepo;
    private final StudyProgramRepository studyProgramRepository;
    private final CourseRepository courseRepository;


    @Autowired
    public UsersServiceImpl(UserRepository userRepo, CourseRepository courseRepository, StudyProgramRepository studyProgramRepository) {
        this.userRepo = userRepo;
        this.studyProgramRepository = studyProgramRepository;
        this.courseRepository = courseRepository;
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

    @Override
    public Users registerUser(RegistrationUserDTO registrationUserDTO) {
        Users user = new Users();
        user.setFirstName(registrationUserDTO.getFirstName());
        user.setLastName(registrationUserDTO.getLastName());
        user.setPassword(registrationUserDTO.getPassword());
        user.setEmail(registrationUserDTO.getEmail());
        user.setStudentNumber(registrationUserDTO.getStudentNumber());
        if (studyProgramRepository.findById(registrationUserDTO.getStudyProgramId()).isPresent()) {
            user.setStudyProgram(studyProgramRepository.findById(registrationUserDTO.getStudyProgramId()).get());
        }else {
            throw new RuntimeException("Study program not found");
        }
        if (courseRepository.findById(registrationUserDTO.getCourseId()).isPresent()) {
            user.setCourse(courseRepository.findById(registrationUserDTO.getCourseId()).get());
        }else {
            throw new RuntimeException("Course not found");
        }
        return userRepo.save(user);

    }

}
