package com.example.dhbwstudysmartbackend.entity;
import com.example.dhbwstudysmartbackend.entity.compositeKeys.IncludedLecturesKey;
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
@Embeddable
public class IncludedLectures {

    @EmbeddedId
    private IncludedLecturesKey id;

    @ManyToOne
    @MapsId("studyprogramid")
    @JoinColumn(name = "studyprogram_id")
    private StudyProgram studyProgram;

    @ManyToOne
    @MapsId("lectureId")
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;
}
