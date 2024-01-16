package com.example.dhbwstudysmartbackend.controller;

import com.example.dhbwstudysmartbackend.entity.StudyProgram;
import com.example.dhbwstudysmartbackend.service.serviceImpl.StudyProgramServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/studyprogram")
@CrossOrigin(origins = "http://localhost:4200")
public class StudyProgramController {
    private final StudyProgramServiceImpl studyProgramService;

    @Autowired
    public StudyProgramController(StudyProgramServiceImpl service) {
        this.studyProgramService = service;
    }

    @GetMapping("/getall")
    public List<StudyProgram> getAllStudyPrograms() {
        return studyProgramService.getAllStudyPrograms();
    }
}
