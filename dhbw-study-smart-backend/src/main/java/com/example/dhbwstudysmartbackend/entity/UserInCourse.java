package com.example.dhbwstudysmartbackend.entity;

import com.example.dhbwstudysmartbackend.entity.compositeKeys.UserInCourseKey;
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
public class UserInCourse {

    @EmbeddedId
    private UserInCourseKey id;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private Lecture lecture;

}
