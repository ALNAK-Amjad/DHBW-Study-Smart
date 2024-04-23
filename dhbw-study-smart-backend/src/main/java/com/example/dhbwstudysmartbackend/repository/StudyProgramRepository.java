package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.StudyProgram;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface StudyProgramRepository extends JpaRepository<StudyProgram, Long> {
}
