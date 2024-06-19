package com.example.dhbwstudysmartbackend.service.serviceImpl;

import com.example.dhbwstudysmartbackend.entity.Appointment;
import com.example.dhbwstudysmartbackend.entity.appointmentDTO.AppointmentDTO;
import com.example.dhbwstudysmartbackend.repository.AppointmentRepository;
import com.example.dhbwstudysmartbackend.repository.UserRepository;
import com.example.dhbwstudysmartbackend.service.AppointmentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentServiceImpl implements AppointmentService {
    private final AppointmentRepository appointmentRepo;
    private final UserRepository userRepo;

    @Autowired
    public AppointmentServiceImpl(AppointmentRepository appointmentRepo, UserRepository userRepo) {
        this.appointmentRepo = appointmentRepo;
        this.userRepo = userRepo;
    }

    @Override
    public List<Appointment> findAllByUserId(String userId) {
        return this.appointmentRepo.findAllByUserId(userId);
    }

    @Override
    public Appointment createAppointment(AppointmentDTO appointment) {
        Appointment ap = new Appointment();
        ap.setTitle(appointment.getTitle());
        ap.setStartDate(appointment.getStartDate());
        ap.setEndDate(appointment.getEndDate());
        ap.setRepetitive(false);

        if (userRepo.findById(appointment.getUserId()).isPresent()) {
            ap.setUsers(userRepo.findById(appointment.getUserId()).get());
        } else {
            throw new RuntimeException("User ID not found");
        }

        return appointmentRepo.save(ap);
    }
}
