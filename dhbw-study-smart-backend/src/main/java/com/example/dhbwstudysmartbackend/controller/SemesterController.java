package com.example.dhbwstudysmartbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dhbwstudysmartbackend.entity.Semester;
import com.example.dhbwstudysmartbackend.service.serviceImpl.SemesterServiceImpl;

@RestController
@RequestMapping("/semester")
@CrossOrigin(origins = "http://localhost:4200")
public class SemesterController {
    private final SemesterServiceImpl semesterService;

    @Autowired
    public SemesterController(SemesterServiceImpl service) {
        this.semesterService = service;
    }

    @GetMapping("/getall")
    public List<Semester> getAllSemesters() {
        return semesterService.getAllSemesters();
    }
}
