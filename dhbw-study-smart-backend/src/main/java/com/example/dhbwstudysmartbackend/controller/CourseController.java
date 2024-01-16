package com.example.dhbwstudysmartbackend.controller;

import com.example.dhbwstudysmartbackend.entity.Course;
import com.example.dhbwstudysmartbackend.service.serviceImpl.CourseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {
    private final CourseServiceImpl courseService;

    @Autowired
    public CourseController(CourseServiceImpl service) {
        this.courseService = service;
    }

    @GetMapping("/getall")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }
}
