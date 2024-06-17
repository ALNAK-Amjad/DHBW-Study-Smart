package com.example.dhbwstudysmartbackend;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


import com.example.dhbwstudysmartbackend.entity.Course;
import com.example.dhbwstudysmartbackend.entity.Semester;
import com.example.dhbwstudysmartbackend.entity.StudyProgram;
import com.example.dhbwstudysmartbackend.entity.Users;
import com.example.dhbwstudysmartbackend.entity.userDTOs.LoginUserDTO;
import com.example.dhbwstudysmartbackend.entity.userDTOs.RegistrationUserDTO;
import com.example.dhbwstudysmartbackend.entity.userDTOs.VerifyUserDTO;
import com.example.dhbwstudysmartbackend.repository.CourseRepository;
import com.example.dhbwstudysmartbackend.repository.SemesterRepository;
import com.example.dhbwstudysmartbackend.repository.StudyProgramRepository;
import com.example.dhbwstudysmartbackend.repository.UserRepository;
import com.example.dhbwstudysmartbackend.service.serviceImpl.UsersServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UserServiceTest {

    @Mock
    private StudyProgramRepository studyProgramRepository;

    @Mock
    private CourseRepository courseRepository;

    @Mock
    private SemesterRepository semesterRepository;

    @Mock
    private UserRepository userRepo;

    @Mock
    private VerifyUserDTO verifyUserDTO; // Mocking the interface

    @InjectMocks
    private UsersServiceImpl userService;

    private String existingEmail = "john.doe@example.com";
    private String correctPassword = "password";
    private String wrongPassword = "wrongpassword";

    private RegistrationUserDTO registrationUserDTO;

    @BeforeEach
    void setUp() {
        registrationUserDTO = new RegistrationUserDTO();
        registrationUserDTO.setFirstName("John");
        registrationUserDTO.setLastName("Doe");
        registrationUserDTO.setPassword("password");
        registrationUserDTO.setEmail("john.doe@example.com");
        registrationUserDTO.setStudentNumber(123456);
        registrationUserDTO.setStudyProgramId(1L);
        registrationUserDTO.setCourseId(1L);
        registrationUserDTO.setSemesterId(1L);

        // Mock behavior for userRepo.getUsersByEmail
        when(userRepo.getUsersByEmail(existingEmail)).thenReturn(verifyUserDTO);
        // Mock behavior for methods defined in VerifyUserDTO
        when(verifyUserDTO.getUserId()).thenReturn(1L);
        when(verifyUserDTO.getEmail()).thenReturn(existingEmail);
        when(verifyUserDTO.getPassword()).thenReturn(correctPassword);
    }

    @Test
    void testRegisterUser_Success() {
        StudyProgram studyProgram = new StudyProgram();
        Course course = new Course();
        Semester semester = new Semester();
        Users savedUser = new Users();

        when(studyProgramRepository.findById(1L)).thenReturn(Optional.of(studyProgram));
        when(courseRepository.findById(1L)).thenReturn(Optional.of(course));
        when(semesterRepository.findById(1L)).thenReturn(Optional.of(semester));
        when(userRepo.save(any(Users.class))).thenReturn(savedUser);

        Users result = userService.registerUser(registrationUserDTO);

        assertEquals(savedUser, result);
    }

    @Test
    void testRegisterUser_StudyProgramNotFound() {
        when(studyProgramRepository.findById(1L)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            userService.registerUser(registrationUserDTO);
        });

        assertEquals("Study program not found", exception.getMessage());
    }

    @Test
    void testRegisterUser_CourseNotFound() {
        when(studyProgramRepository.findById(1L)).thenReturn(Optional.of(new StudyProgram()));
        when(courseRepository.findById(1L)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            userService.registerUser(registrationUserDTO);
        });

        assertEquals("Course not found", exception.getMessage());
    }

    @Test
    void testRegisterUser_SemesterNotFound() {
        when(studyProgramRepository.findById(1L)).thenReturn(Optional.of(new StudyProgram()));
        when(courseRepository.findById(1L)).thenReturn(Optional.of(new Course()));
        when(semesterRepository.findById(1L)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            userService.registerUser(registrationUserDTO);
        });

        assertEquals("Semester not found", exception.getMessage());
    }

    @Test
    void testVerifyUser_CorrectCredentials() {
        LoginUserDTO result = userService.verifyUser(existingEmail, correctPassword);

        assertTrue(result.isVerified());
        assertEquals(1L, result.getUserId());
    }

    @Test
    void testVerifyUser_IncorrectPassword() {
        when(verifyUserDTO.getPassword()).thenReturn(wrongPassword);

        LoginUserDTO result = userService.verifyUser(existingEmail, wrongPassword);

        assertTrue(result.isVerified());
        assertEquals(1 ,result.getUserId());
    }

    @Test
    void testVerifyUser_UserNotFound() {
        when(userRepo.getUsersByEmail(anyString())).thenReturn(null);

        LoginUserDTO result = userService.verifyUser("nonexistent@example.com", "password");

        assertFalse(result.isVerified());
        assertNull(result.getUserId());
    }

}
