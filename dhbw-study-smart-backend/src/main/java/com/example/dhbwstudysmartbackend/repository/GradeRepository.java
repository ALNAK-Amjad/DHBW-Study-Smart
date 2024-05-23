
package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    @Query("SELECT g FROM Grade g WHERE g.users.userId = :userId AND g.lecture.lectureId = :lectureId")
    Grade findByUsersUserIdAndLectureId(Long userId, Long lectureId);


    @Query(value = """
SELECT GRADE.GRADE AS grade,
       GRADE.PLANNED_GRADE AS plannedGrade,
       GRADE.USER_ID AS userID, 
       LECTURE.LECTURE_ID AS lectureID, 
       LECTURE_GROUP.LECTURE_GROUP_ID AS lectureGroupId, 
       LECTURE_GROUP.NAME AS lectureGroupName
FROM GRADE
    INNER JOIN LECTURE 
        ON GRADE.LECTURE_ID = LECTURE.LECTURE_ID 
    INNER JOIN CON_LECTURE_TO_GROUP
        ON LECTURE.LECTURE_ID = CON_LECTURE_TO_GROUP.LECTURE_ID
    INNER JOIN LECTURE_GROUP
        ON CON_LECTURE_TO_GROUP.LECTURE_GROUP_ID = LECTURE_GROUP.LECTURE_GROUP_ID
    WHERE( GRADE.USER_ID = ?1)
""", nativeQuery = true)
    List<GradeDTO> getAllGrades(long userId);

}

