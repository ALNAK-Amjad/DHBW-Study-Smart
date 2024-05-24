
package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.CompleteGradeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    @Query("SELECT g FROM Grade g WHERE g.users.userId = :userId AND g.lecture.lectureId = :lectureId")
    Grade findByUsersUserIdAndLectureId(Long userId, Long lectureId);

    @Query(value = """
        SELECT 
            g.GRADE AS grade,
            g.PLANNED_GRADE AS plannedGrade,
            g.USER_ID AS userId, 
            l.LECTURE_ID AS lectureId,
            lg.LECTURE_GROUP_ID AS lectureGroupId,
            lg.NAME AS lectureGroupName
        FROM GRADE g
        LEFT JOIN LECTURE l ON g.LECTURE_ID = l.LECTURE_ID
        LEFT JOIN CON_LECTURE_TO_GROUP cltg ON l.LECTURE_ID = cltg.LECTURE_ID
        LEFT JOIN LECTURE_GROUP lg ON cltg.LECTURE_GROUP_ID = lg.LECTURE_GROUP_ID
        WHERE g.USER_ID = ?1
        """, nativeQuery = true)
    List<CompleteGradeDTO> getAllGrades(long userId);
}
