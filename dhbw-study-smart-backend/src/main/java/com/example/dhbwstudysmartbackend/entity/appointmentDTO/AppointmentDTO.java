package com.example.dhbwstudysmartbackend.entity.appointmentDTO;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AppointmentDTO {
    private Long appointmentId;
    private String title;
    private Timestamp startDate;
    private Timestamp endDate;
    private boolean repetitive;
    private Long userId;
}
