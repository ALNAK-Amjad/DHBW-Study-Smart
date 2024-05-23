package com.example.dhbwstudysmartbackend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(exclude = {"lectureId", "lectureGroupId"})
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id", nullable = false)
    @JsonManagedReference
    private Lecture lectureId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_group_id", nullable = false)
    @JsonBackReference
    private LectureGroup lectureGroupId;
}