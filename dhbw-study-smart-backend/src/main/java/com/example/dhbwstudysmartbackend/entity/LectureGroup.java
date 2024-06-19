package com.example.dhbwstudysmartbackend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@EqualsAndHashCode(exclude = {"lectures"})
public class LectureGroup {
    @Id
    @GenericGenerator(
            name = "lectureGroupId-sequence-generator",
            strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
            parameters = {
                    @Parameter(name = "sequence_name", value = "lectureGroupId_sequence"),
                    @Parameter(name = "initial_value", value = "1000"),
                    @Parameter(name = "increment_size", value = "1")
            }
    )
    @GeneratedValue(generator = "lectureGroupId-sequence-generator")
    private Long lectureGroupId;

    @Column
    private String name;
    @OneToMany(mappedBy = "lectureGroupId", fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<ConLectureToGroup> lectures;
}
