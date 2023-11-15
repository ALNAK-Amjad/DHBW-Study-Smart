package com.example.dhbwstudysmartbackend.service.serviceImpl;

import com.example.dhbwstudysmartbackend.entity.Lecture;
import com.example.dhbwstudysmartbackend.repository.LectureRepository;
import com.example.dhbwstudysmartbackend.service.LectureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LectureServiceImpl implements LectureService {
private final LectureRepository lectureRepository;

    @Autowired
    public LectureServiceImpl(LectureRepository lectureRepository) {
        this.lectureRepository = lectureRepository;
    }

    @Override
    public void saveLecture(Lecture lecture) {
        lectureRepository.save(lecture);
    }
}
