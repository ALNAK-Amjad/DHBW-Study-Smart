package com.example.dhbwstudysmartbackend.entity;
import com.example.dhbwstudysmartbackend.entity.compositeKeys.IncludedLecturesKey;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Embeddable
public class includedLectures {

    @EmbeddedId
    private IncludedLecturesKey id;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "courseId")
    private Course course;

    @ManyToOne
    @MapsId("lectureId")
    @JoinColumn(name = "lectureId")
    private Lecture lecture;
}
