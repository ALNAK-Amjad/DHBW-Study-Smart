package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
}
