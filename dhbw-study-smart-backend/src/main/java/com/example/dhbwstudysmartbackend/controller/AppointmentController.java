package com.example.dhbwstudysmartbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.dhbwstudysmartbackend.entity.Appointment;
import com.example.dhbwstudysmartbackend.service.AppointmentService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/appointment")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {
    // Gets methods from Appointment Repository
    private final AppointmentService appointmentService;

    // Spring WebClient to act as a Proxy Server between the Frontend and Rapla
    private final WebClient webClient;

    // Base Url where timetable data will be retrieved from
    private final String raplaBaseUrl = "https://api.dhbw.dev/rapla/lectures/";

    // Initialize Controller
    public AppointmentController(WebClient.Builder webClientBuilder, AppointmentService appointmentService) {
        // Initialize baseUrl for proxy request to rapla
        this.webClient = webClientBuilder.baseUrl(raplaBaseUrl).build();

        // Constructor injection
        this.appointmentService = appointmentService;
    }

    // Get timetable data from Rapla via Proxy Request
    @GetMapping("/proxy")
    public Mono<String> proxyRequest(@RequestParam(name = "url") String url) {
        // Make the request to the target URL
        return webClient.get()
            .uri(url)
            .retrieve()
            .bodyToMono(String.class)
            .onErrorResume((err) -> Mono.error(new RuntimeException("Error proxying request: " + err.getMessage())));
    }

    // Get all appointments from a user
    @GetMapping("/getAllAppointmentsByUserId")
    public List<Appointment> getAllAppointmentsByUserId(@RequestParam(name = "userId") String userId) {
        List<Appointment> appointments = appointmentService.findAllByUserId(userId);
        return appointments;
    }
}
