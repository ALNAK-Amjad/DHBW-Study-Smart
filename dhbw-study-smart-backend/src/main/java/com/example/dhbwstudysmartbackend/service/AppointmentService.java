package com.example.dhbwstudysmartbackend.service;

import java.util.List;

import com.example.dhbwstudysmartbackend.entity.Appointment;
import com.example.dhbwstudysmartbackend.entity.appointmentDTO.AppointmentDTO;

public interface AppointmentService {
    public List<Appointment> findAllByUserId(String userId);
    public Appointment createAppointment(AppointmentDTO appointment);
}
