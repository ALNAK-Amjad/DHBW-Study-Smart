
package com.example.dhbwstudysmartbackend.controller;

import com.example.dhbwstudysmartbackend.entity.Grade;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.CompleteGradeDTO;
import com.example.dhbwstudysmartbackend.entity.GradeDTO.GradeDTO;
import com.example.dhbwstudysmartbackend.repository.GradeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.example.dhbwstudysmartbackend.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/grades")
@CrossOrigin(origins = "http://localhost:4200")
public class GradeController {

    @Autowired
    GradeRepository gradeRepository;
    private final GradeService gradeService;

    @Autowired
    public GradeController(GradeService gradeService) {
        this.gradeService = gradeService;
    }

    @GetMapping("/getAllGrade/{userId}")
    public List<CompleteGradeDTO> getGradeList(@PathVariable long userId) {
        return gradeService.getAllGrades(userId);
    }

    @GetMapping("/getGradeById/{id}")
    public ResponseEntity<Grade> getGradeById(@PathVariable long id) {
        Optional<Grade> gradeObj = gradeRepository.findById(id);

        if (gradeObj.isPresent()) {
            return new ResponseEntity<>(gradeObj.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

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

    @PostMapping("/updateGrade/{id}")
    public ResponseEntity<Grade> updateGrade(@PathVariable long id, @RequestBody Grade grade) {
        try {
            Optional<Grade> gradeData = gradeRepository.findById(id);
            if (gradeData.isPresent()) {
                Grade uddateGradeData = gradeData.get();
                uddateGradeData.setGrade(grade.getGrade());

                Grade gradeObj = gradeRepository.save(uddateGradeData);
                return new ResponseEntity<>(gradeObj, HttpStatus.CREATED);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteGradeById/{id}")
    public ResponseEntity<HttpStatus> deleteGrade(@PathVariable Long id) {
        try {
            gradeRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}