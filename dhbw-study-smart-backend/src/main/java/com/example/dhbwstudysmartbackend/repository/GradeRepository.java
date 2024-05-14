
package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    @Query("SELECT g FROM Grade g WHERE g.users.userId = :userId AND g.lecture.lectureId = :lectureId")
    Grade findByUsersUserIdAndLectureId(Long userId, Long lectureId);
}

