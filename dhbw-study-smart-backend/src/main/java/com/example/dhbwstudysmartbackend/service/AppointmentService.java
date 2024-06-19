package com.example.dhbwstudysmartbackend.service;

import java.util.List;

import com.example.dhbwstudysmartbackend.entity.Appointment;

public interface AppointmentService {
    public List<Appointment> findAllByUserId(String userId);
}
