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
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    private String firstName;

    private String lastName;

    private String password;

    private String email;

    private int studentNumber;


    @ManyToOne
    @JoinColumn(name = "semester_id", nullable = true)
    private Semester semester;

    @ManyToOne
    @JoinColumn(name = "studyprogram_id", nullable = true)
    private StudyProgram studyProgram;


}
