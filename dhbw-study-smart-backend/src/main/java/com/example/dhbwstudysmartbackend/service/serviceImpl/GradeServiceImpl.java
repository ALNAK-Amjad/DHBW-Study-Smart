
package com.example.dhbwstudysmartbackend.service.serviceImpl;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;
import com.example.dhbwstudysmartbackend.repository.GradeRepository;
import com.example.dhbwstudysmartbackend.repository.LectureRepository;
import com.example.dhbwstudysmartbackend.repository.UserRepository;
import com.example.dhbwstudysmartbackend.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


@Service
public class GradeServiceImpl implements GradeService {

    private final GradeRepository gradeRepository;
    private final LectureRepository lectureRepository;
    private final UserRepository userRepository;

    @Autowired
    public GradeServiceImpl(GradeRepository gradeRepository, LectureRepository lectureRepository, UserRepository userRepository) {
        this.gradeRepository = gradeRepository;
        this.lectureRepository = lectureRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Grade addGrade(GradeDTO gradeDTO) {
        Optional<Grade> existingGrade = Optional.ofNullable(
                gradeRepository.findByUsersUserIdAndLectureId(gradeDTO.getUserId(), lectureRepository.findById(gradeDTO.getLectureId()).orElse(null).getLectureId())
        );

        Grade grade;
        if (existingGrade.isPresent()) {
            grade = existingGrade.get();
            grade.setGrade(gradeDTO.getGrade());
            grade.setPlannedGrade(gradeDTO.getPlannedGrade());
        } else {
            grade = new Grade(gradeDTO.getGrade(), gradeDTO.getPlannedGrade());
            if (lectureRepository.findById(gradeDTO.getLectureId()).isPresent()) {
                grade.setLecture(lectureRepository.findById(gradeDTO.getLectureId()).get());
            } else {
                throw new RuntimeException("Lecture ID not found");
            }
            if (userRepository.findById(gradeDTO.getUserId()).isPresent()) {
                grade.setUsers(userRepository.findById(gradeDTO.getUserId()).get());
            } else {
                throw new RuntimeException("User not found");
            }
        }

        return gradeRepository.save(grade);
    }

    @Override
    public List<GradeDTO> getAllGrades(long userId) {
    return gradeRepository.getAllGrades(userId);
    }

}
