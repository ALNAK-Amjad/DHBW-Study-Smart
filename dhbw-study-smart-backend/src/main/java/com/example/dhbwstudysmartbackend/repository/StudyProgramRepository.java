package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.StudyProgram;
import org.springframework.stereotype.Repository;

import com.example.dhbwstudysmartbackend.entity.Users;
import com.example.dhbwstudysmartbackend.entity.userDTOs.VerifyUserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyProgramRepository extends JpaRepository<StudyProgram, Long> {


}
