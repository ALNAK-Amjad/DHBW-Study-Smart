package com.example.dhbwstudysmartbackend.entity.GradeDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class GradeDTO {
    private double grade;
    private double plannedGrade;
    private long userId;
    private long lectureId;
}
