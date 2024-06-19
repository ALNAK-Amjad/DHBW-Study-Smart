package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.Lecture;
import com.example.dhbwstudysmartbackend.entity.LectureGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface LectureRepository extends JpaRepository<Lecture, Long> {

    List<Lecture> findBySemester_SemesterId(Long semesterId);

    @Query("SELECT lg FROM LectureGroup lg JOIN FETCH lg.lectures clg JOIN FETCH clg.lectureId l WHERE l.semester.semesterId = :semesterId")
    List<LectureGroup> findGroupedLecturesBySemesterId(@Param("semesterId") Long semesterId);
}
