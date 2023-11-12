package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.Appointment;
import com.example.dhbwstudysmartbackend.entity.Semester;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SemesterRepository extends JpaRepository<Semester, Long> {
}
