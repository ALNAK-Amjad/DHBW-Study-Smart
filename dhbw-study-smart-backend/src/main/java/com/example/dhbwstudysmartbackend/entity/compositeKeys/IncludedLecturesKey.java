package com.example.dhbwstudysmartbackend.entity.compositeKeys;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;

import java.io.Serializable;

@Embeddable
public class IncludedLecturesKey implements Serializable {
    @Column(name = "courseId")
    private Long courseId;

    @Column(name = "lectureId")
    private Long lectureId;

}
