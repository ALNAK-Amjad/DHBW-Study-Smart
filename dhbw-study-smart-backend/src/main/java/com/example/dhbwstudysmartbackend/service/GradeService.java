package com.example.dhbwstudysmartbackend.service;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;

public interface GradeService {
    Grade addGrade(GradeDTO gradeDTO);
}