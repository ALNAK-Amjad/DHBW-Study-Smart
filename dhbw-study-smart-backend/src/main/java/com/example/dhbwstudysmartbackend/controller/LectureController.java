package com.example.dhbwstudysmartbackend.controller;

import com.example.dhbwstudysmartbackend.entity.Lecture;
import com.example.dhbwstudysmartbackend.entity.LectureGroup;
import com.example.dhbwstudysmartbackend.repository.LectureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lecture")
@CrossOrigin(origins = "http://localhost:4200")
public class LectureController {
    @Autowired
    private LectureRepository lectureRepository;

    // Get all available lectures
    @GetMapping("/getAllLectures")
    public List<Lecture> getAllLectures() {
        return lectureRepository.findAll();
    }

    // Get all available Lectures by their ids
    @GetMapping("/getAllLectures/{id}")
    public Lecture getAllAllLecturesByID(@PathVariable("id") Long id) {
        return lectureRepository.findById(id).orElseThrow(() -> new RuntimeException("Lecture not found"));
    }

    // Get all available lectures by semester id
    @GetMapping("/getLecturesBySemester/{semesterId}")
    public List<Lecture> getLecturesBySemester(@PathVariable("semesterId") Long semesterId) {
        return lectureRepository.findBySemester_SemesterId(semesterId);
    }

    // Get grouped lectures by semester id
    @GetMapping("/groupedCourses/{semesterId}")
    public List<LectureGroup> getGroupedLecturesBySemester(@PathVariable("semesterId") Long semesterId) {
        return lectureRepository.findGroupedLecturesBySemesterId(semesterId);
    }
}
