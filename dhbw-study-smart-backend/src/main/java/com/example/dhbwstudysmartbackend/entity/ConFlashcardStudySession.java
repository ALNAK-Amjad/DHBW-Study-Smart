package com.example.dhbwstudysmartbackend.entity;

import com.example.dhbwstudysmartbackend.entity.compositeKeys.ConFlashcardStudySessionKey;
import jakarta.persistence.*;

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

    private boolean answered;
}
