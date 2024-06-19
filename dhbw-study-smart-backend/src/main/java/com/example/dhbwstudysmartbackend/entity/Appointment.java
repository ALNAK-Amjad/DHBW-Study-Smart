package com.example.dhbwstudysmartbackend.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Appointment {
    @Id
    @GenericGenerator(
        name = "appointmentId-sequence-generator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
            @Parameter(name = "sequence_name", value = "appointmentId_sequence"),
            @Parameter(name = "initial_value", value = "1000"),
            @Parameter(name = "increment_size", value = "1")
        }
    )
    @GeneratedValue(generator = "appointmentId-sequence-generator")
    private Long appointmentId;

    @Column
    private String title;

    @Column
    private Timestamp startDate;

    @Column
    private Timestamp endDate;

    @Column
    private boolean repetitive;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users users;
}
