package com.example.dhbwstudysmartbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConLectureToGroup {
    @Id
    @GenericGenerator(
            name = "conLectureToGroupId-sequence-generator",
            strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
            parameters = {
                    @Parameter(name = "sequence_name", value = "conLectureToGroupId_sequence"),
                    @Parameter(name = "initial_value", value = "1000"),
                    @Parameter(name = "increment_size", value = "1")
            }
    )
    @GeneratedValue(generator = "conLectureToGroupId-sequence-generator")
    private Long conLectureToGroupId;

    @ManyToOne
    @JoinColumn(name = "LectureId", nullable = false)
    private Lecture lectureId;

    @ManyToOne
    @JoinColumn(name = "LectureGroupId", nullable = false)
    private LectureGroup lectureGroupId;
}
