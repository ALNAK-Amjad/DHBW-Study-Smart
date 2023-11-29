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
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long documentId;

    private String Path;

    @ManyToOne
    @JoinColumn(name = "SemesterId", nullable = false)
    private Semester semester;

    @ManyToOne
    @JoinColumn(name = "LectureId", nullable = false)
    private Lecture lecture;


}
