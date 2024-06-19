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

    // Add a new grade or update an existing one
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

    // Get all grades for a specific user
    @Override
    public List<CompleteGradeDTO> getAllGrades(long userId) {
        return gradeRepository.getAllGrades(userId);
    }

    // Get a grade by ID
    @Override
    public Optional<Grade> getGradeById(long id) {
        return gradeRepository.findById(id);
    }

    // Update an existing grade
    @Override
    public Grade updateGrade(long id, Grade grade) {
        Optional<Grade> gradeData = gradeRepository.findById(id);
        if (gradeData.isPresent()) {
            Grade updateGradeData = gradeData.get();
            updateGradeData.setGrade(grade.getGrade());

            return gradeRepository.save(updateGradeData);
        }
        return null;
    }

    // Delete a grade by ID
    @Override
    public boolean deleteGrade(long id) {
        if (gradeRepository.existsById(id)) {
            gradeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
