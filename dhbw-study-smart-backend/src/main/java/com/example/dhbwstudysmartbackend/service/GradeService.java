package com.example.dhbwstudysmartbackend.service;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;

public interface GradeService {
    String compareGrades(Long userId, Long lectureId);

    Grade addGrade(GradeDTO gradeDTO);
}