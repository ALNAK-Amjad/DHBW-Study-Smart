package com.example.dhbwstudysmartbackend.entity.GradeDTO;


public interface CompleteGradeDTO {
    double getGrade();
    double getPlannedGrade();
    long getUserId();
    long getLectureId();
    long getLectureGroupId();
    String getLectureGroupName();
}
