package com.example.dhbwstudysmartbackend.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

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
    @GenericGenerator(
            name = "studyProgramId-sequence-generator",
            strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
            parameters = {
                    @Parameter(name = "sequence_name", value = "studyProgramId_sequence"),
                    @Parameter(name = "initial_value", value = "1000"),
                    @Parameter(name = "increment_size", value = "1")
            })
    @GeneratedValue(generator = "studyProgramId-sequence-generator")
    private Long studyProgramId;

    @Column
    private String name;

    @Column
    private double etcs;

    @Column
    private int semesterCount;
}
