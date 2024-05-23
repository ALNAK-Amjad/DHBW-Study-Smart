package com.example.dhbwstudysmartbackend.entity.GradeDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class GradeDTO {
    private long grade;
    private long plannedGrade;
    private long userId;
    private long lectureId;

}
