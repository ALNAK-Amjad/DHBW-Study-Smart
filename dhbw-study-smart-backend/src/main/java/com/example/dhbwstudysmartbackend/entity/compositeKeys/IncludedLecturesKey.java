package com.example.dhbwstudysmartbackend.entity.compositeKeys;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;

import java.io.Serializable;

@Embeddable
public class IncludedLecturesKey implements Serializable {
    @Column(name = "studyprogram_id")
    private Long studyprogramid;

    @Column(name = "lecture_id")
    private Long lectureId;

}
