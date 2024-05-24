
package com.example.dhbwstudysmartbackend.service.serviceImpl;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.CompleteGradeDTO;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;
import com.example.dhbwstudysmartbackend.repository.GradeRepository;
import com.example.dhbwstudysmartbackend.repository.LectureRepository;
import com.example.dhbwstudysmartbackend.repository.UserRepository;
import com.example.dhbwstudysmartbackend.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
                gradeRepository.findByUsersUserIdAndLectureId(gradeDTO.getUserId(), gradeDTO.getLectureId())
        );

        Grade grade;
        if (existingGrade.isPresent()) {
            grade = existingGrade.get();
            grade.setGrade(gradeDTO.getGrade());
            grade.setPlannedGrade(gradeDTO.getPlannedGrade());
        } else {
            grade = new Grade(gradeDTO.getGrade(), gradeDTO.getPlannedGrade());
            lectureRepository.findById(gradeDTO.getLectureId()).ifPresent(grade::setLecture);
            userRepository.findById(gradeDTO.getUserId()).ifPresent(grade::setUsers);
        }

        return gradeRepository.save(grade);
    }

    @Override
    public List<CompleteGradeDTO> getAllGrades(long userId) {
        List<CompleteGradeDTO> grades = gradeRepository.getAllGrades(userId);
        System.out.println("Grades for userId " + userId + ": " + grades);
        return grades;
    }
}
