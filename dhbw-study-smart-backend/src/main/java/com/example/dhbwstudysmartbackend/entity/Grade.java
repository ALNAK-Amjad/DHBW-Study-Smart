package com.example.dhbwstudysmartbackend.entity;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Grade {
    @Id
    @GenericGenerator(
        name = "gradeId-sequence-generator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
            @Parameter(name = "sequence_name", value = "gradeId_sequence"),
            @Parameter(name = "initial_value", value = "1000"),
            @Parameter(name = "increment_size", value = "1")
        }
    )
    @GeneratedValue(generator = "gradeId-sequence-generator")

    private Long gradeId;

    private double grade;

    private double plannedGrade;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users users;

    @ManyToOne
    @JoinColumn(name = "lecture_id", nullable = false)
    private Lecture lecture;
}
