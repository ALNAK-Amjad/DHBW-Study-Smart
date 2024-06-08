package com.example.dhbwstudysmartbackend.entity.GradeDTO;

public interface CompleteGradeDTO {
    double getGrade();
    double getPlannedGrade();
    long getUserId();
    long getLectureId();
    Long getLectureGroupId();  // Wrapper Klasse verwendet, um null-Werte zu erlauben
    String getLectureGroupName();
}
