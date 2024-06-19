package com.example.dhbwstudysmartbackend.controller;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.CompleteGradeDTO;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;
import com.example.dhbwstudysmartbackend.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/grades")
@CrossOrigin(origins = "http://localhost:4200")
public class GradeController {

    // Injecting the GradeService
    private final GradeService gradeService;

    @Autowired
    public GradeController(GradeService gradeService) {
        this.gradeService = gradeService;
    }

    // Endpoint to get all grades for a user
    @GetMapping("/getAllGrade/{userId}")
    public List<CompleteGradeDTO> getGradeList(@PathVariable long userId) {
        return gradeService.getAllGrades(userId);
    }

    // Endpoint to get a grade by ID
    @GetMapping("/getGradeById/{id}")
    public ResponseEntity<Grade> getGradeById(@PathVariable long id) {
        try {
            Optional<Grade> gradeObj = gradeService.getGradeById(id);

            if (gradeObj.isPresent()) {
                return new ResponseEntity<>(gradeObj.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoint to add a new grade
    @PostMapping("/addGrade")
    public ResponseEntity<Grade> addGrade(@RequestBody GradeDTO gradeDTO) {
        try {
            Grade savedGrade = gradeService.addGrade(gradeDTO);
            return new ResponseEntity<>(savedGrade, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoint to update an existing grade
    @PostMapping("/updateGrade/{id}")
    public ResponseEntity<Grade> updateGrade(@PathVariable long id, @RequestBody Grade grade) {
        try {
            Grade updatedGrade = gradeService.updateGrade(id, grade);
            if (updatedGrade != null) {
                return new ResponseEntity<>(updatedGrade, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoint to delete a grade by ID
    @DeleteMapping("/deleteGradeById/{id}")
    public ResponseEntity<HttpStatus> deleteGrade(@PathVariable Long id) {
        try {
            boolean isDeleted = gradeService.deleteGrade(id);
            if (isDeleted) {
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
