package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.StudySession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudySessionRepository extends JpaRepository<StudySession, Long> {
}
