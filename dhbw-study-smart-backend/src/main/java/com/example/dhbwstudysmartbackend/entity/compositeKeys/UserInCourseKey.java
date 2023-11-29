package com.example.dhbwstudysmartbackend.entity.compositeKeys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class UserInCourseKey implements Serializable {
    @Column(name = "course_id")
    private Long courseId;

    @Column(name = "user_id")
    private Long userId;
}
