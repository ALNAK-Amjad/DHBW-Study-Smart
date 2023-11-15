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
    private Long UserId;

    private String firstName;

    private String lastName;

    private String password;

    private String email;

    private int studentNumber;

    @ManyToOne
    @JoinColumn(name = "SemesterId", nullable = true)
    private Semester semester;

    @ManyToOne
    @JoinColumn(name = "CourseId", nullable = false)
    private Course course;


}
