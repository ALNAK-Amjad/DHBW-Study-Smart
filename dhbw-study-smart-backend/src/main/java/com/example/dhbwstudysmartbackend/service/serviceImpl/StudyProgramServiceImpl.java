package com.example.dhbwstudysmartbackend.service.serviceImpl;

import com.example.dhbwstudysmartbackend.entity.StudyProgram;
import com.example.dhbwstudysmartbackend.repository.StudyProgramRepository;
import com.example.dhbwstudysmartbackend.service.StudyProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyProgramServiceImpl implements StudyProgramService {
    private final StudyProgramRepository studyProgramRepository;

    @Autowired
    public StudyProgramServiceImpl(StudyProgramRepository studyProgramRepository) {
        this.studyProgramRepository = studyProgramRepository;
    }

    @Override
    public List<StudyProgram> getAllStudyPrograms() {
        return studyProgramRepository.findAll();
    }
}
