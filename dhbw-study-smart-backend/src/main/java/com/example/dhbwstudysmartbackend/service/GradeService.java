package com.example.dhbwstudysmartbackend.service;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.CompleteGradeDTO;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;

import java.util.List;

public interface GradeService {
    Grade addGrade(GradeDTO gradeDTO);

    List<CompleteGradeDTO> getAllGrades(long userId);
}