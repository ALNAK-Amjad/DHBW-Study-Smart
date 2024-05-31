package com.example.dhbwstudysmartbackend.service;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.CompleteGradeDTO;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;

import java.util.List;
import java.util.Optional;

// Service interface for Grade operations
public interface GradeService {
    Grade addGrade(GradeDTO gradeDTO);

    List<CompleteGradeDTO> getAllGrades(long userId);

    Optional<Grade> getGradeById(long id);

    Grade updateGrade(long id, Grade grade);

    boolean deleteGrade(long id);
}
