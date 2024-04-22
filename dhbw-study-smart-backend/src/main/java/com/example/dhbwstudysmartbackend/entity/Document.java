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
public class Document {
    @Id
    @GenericGenerator(
        name = "documentId-sequence-generator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
                @Parameter(name = "sequence_name", value = "documentId_sequence"),
                @Parameter(name = "initial_value", value = "1000"),
                @Parameter(name = "increment_size", value = "1")
        }
    )
    @GeneratedValue(generator = "documentId-sequence-generator")
    private Long documentId;

    private String path;

    private String filename;

    @ManyToOne
    @JoinColumn(name = "SemesterId", nullable = false)
    private Semester semester;

    @ManyToOne
    @JoinColumn(name = "LectureId", nullable = false)
    private Lecture lecture;
}
