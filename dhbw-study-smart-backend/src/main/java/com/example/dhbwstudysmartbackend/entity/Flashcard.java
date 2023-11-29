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
public class Flashcard {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long flashcardId;

    private String question;

    private String answer;

    @ManyToOne
    @JoinColumn(name = "CourseId", nullable = false)
    private Course course;
}
