package com.example.dhbwstudysmartbackend.entity.GradeDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


public interface GradeDTO {
    double getGrade();
    double getPlannedGrade();
    long getUserId();
    long getLectureId();
    long getLectureGroupId();
    String getLectureGroupName();
}
