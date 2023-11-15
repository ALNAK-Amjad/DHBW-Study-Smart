package com.example.dhbwstudysmartbackend.entity.compositeKeys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;

import java.io.Serializable;

@Embeddable
public class ConFlashcardStudySessionKey implements Serializable {
    @Column(name = "flashcardId")
    private Long flashcardId;

    @Column(name = "studySessionId")
    private Long studySessionId;

}
