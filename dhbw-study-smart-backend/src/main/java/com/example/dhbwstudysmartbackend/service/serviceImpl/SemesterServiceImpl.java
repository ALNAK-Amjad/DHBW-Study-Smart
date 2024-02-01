package com.example.dhbwstudysmartbackend.service.serviceImpl;

import com.example.dhbwstudysmartbackend.entity.Semester;
import com.example.dhbwstudysmartbackend.repository.SemesterRepository;
import com.example.dhbwstudysmartbackend.service.SemesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SemesterServiceImpl implements SemesterService {
    private final SemesterRepository semesterRepository;

    @Autowired
    public SemesterServiceImpl(SemesterRepository semesterRepository, SemesterRepository semesterRepository1) {
        this.semesterRepository = semesterRepository1;
    }

    @Override
    public List<Semester> getAllSemesters() {
        return semesterRepository.findAll();
    }
}
