package com.example.dhbwstudysmartbackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudyProgram {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long studyProgramId;

    private String name;

    private double etcs;

    private int semesterCount;
}
