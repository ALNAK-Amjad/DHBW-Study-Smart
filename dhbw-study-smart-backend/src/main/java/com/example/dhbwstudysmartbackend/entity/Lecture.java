package com.example.dhbwstudysmartbackend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(exclude = {"semester", "lectureGroups"})
public class Lecture {
    @Id
    @GenericGenerator(
        name = "lectureId-sequence-generator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
            @Parameter(name = "sequence_name", value = "lectureId_sequence"),
            @Parameter(name = "initial_value", value = "1000"),
            @Parameter(name = "increment_size", value = "1")
        }
    )
    @GeneratedValue(generator = "lectureId-sequence-generator")
    private Long lectureId;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "semester_id", nullable = true)
    @JsonBackReference
    private Semester semester;

    @OneToMany(mappedBy = "lectureId", fetch = FetchType.LAZY)
    @JsonBackReference
    private Set<ConLectureToGroup> lectureGroups;
}