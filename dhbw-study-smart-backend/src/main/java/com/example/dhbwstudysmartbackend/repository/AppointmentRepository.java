package com.example.dhbwstudysmartbackend.repository;

import com.example.dhbwstudysmartbackend.entity.Appointment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    @Query(
        value = """
            SELECT * FROM APPOINTMENT
            WHERE user_id = ?1
        """,
        nativeQuery = true
    )
    List<Appointment> findAllByUserId(String userId);
}
