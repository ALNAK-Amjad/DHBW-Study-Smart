package com.example.dhbwstudysmartbackend.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudySession {
    @Id
    @GenericGenerator(
        name = "studySessionId-sequence-generator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
            @Parameter(name = "sequence_name", value = "studySessionId_sequence"),
            @Parameter(name = "initial_value", value = "1000"),
            @Parameter(name = "increment_size", value = "1")
        }
    )
    @GeneratedValue(generator = "studySessionId-sequence-generator")

    private Long studySessionId;

    private Time flashcardTime;

    @ManyToOne
    @JoinColumn(name = "appointment_id", nullable = true)
    private Appointment appointment;
}
