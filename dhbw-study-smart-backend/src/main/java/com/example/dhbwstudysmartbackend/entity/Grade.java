package com.example.dhbwstudysmartbackend.entity;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long GradeId;

    private double grade;

    private double plannedGrade;

    @ManyToOne
    @JoinColumn(name = "UserId", nullable = false)
    private Users users;

    @ManyToOne
    @JoinColumn(name = "LectureId", nullable = false)
    private Lecture lecture;

}
