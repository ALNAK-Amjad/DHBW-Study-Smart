
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
    public String compareGrades(Long userId, Long lectureId) {
        List<Grade> grades = Collections.singletonList(gradeRepository.findByUsersUserIdAndLectureId(userId, lectureId));

        if (grades.isEmpty()) {
            return "Es liegen keine Daten für die angegebene Benutzer-ID und Vorlesung vor.";
        }

        double sum = 0.0;
        int count = 0;

        for (Grade grade : grades) {
            sum += grade.getGrade();
            count++;
        }

        double average;
        if (count > 0) {
            average = sum / count;
        } else {
            average = 0.0;
        }


        double plannedGrade = grades.get(grades.size() - 1).getPlannedGrade();

        if (average >= plannedGrade) {
            return "Herzlichen Glückwunsch! Du hast deine gewünschte Durchschnittsnote erreicht.";
        } else {
            return "Leider hast du deine gewünschte Durchschnittsnote nicht erreicht. Versuche beim nächsten Mal mehr zu lernen.";
        }
    }

    @Override
    public Grade addGrade(GradeDTO gradeDTO) {
        Grade grade = new Grade(gradeDTO.getGrade(), gradeDTO.getPlannedGrade());
        if (lectureRepository.findById(gradeDTO.getLectureId()).isPresent()) {
            grade.setLecture(lectureRepository.findById(gradeDTO.getLectureId()).get());
        } else {
            throw new RuntimeException("lecture ID not found");
        }
        if (userRepository.findById(gradeDTO.getUserId()).isPresent()) {
            grade.setUsers(userRepository.findById(gradeDTO.getUserId()).get());
        } else {
            throw new RuntimeException("user not found");
        }
        gradeRepository.save(grade);
        return grade;
    }
}
