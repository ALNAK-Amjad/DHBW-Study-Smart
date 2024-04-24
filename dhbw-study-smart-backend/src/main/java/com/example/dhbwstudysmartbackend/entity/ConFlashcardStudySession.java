package com.example.dhbwstudysmartbackend.entity;

import com.example.dhbwstudysmartbackend.entity.compositeKeys.ConFlashcardStudySessionKey;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
public class ConFlashcardStudySession {

    @EmbeddedId
    private ConFlashcardStudySessionKey id;

    @ManyToOne
    @MapsId("flashcardId")
    @JoinColumn(name = "flashcardId")
    private Flashcard flashcard;

    @ManyToOne
    @MapsId("studySessionId")
    @JoinColumn(name = "studySessionId")
    private StudySession studySession;

    @Column
    private boolean answered;
}
