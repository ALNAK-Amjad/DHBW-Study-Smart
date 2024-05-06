package com.example.dhbwstudysmartbackend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/appointment")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {
    // Spring WebClient to act as a Proxy Server between the Frontend and Rapla
    private final WebClient webClient;

    // Base Url where timetable data will be retrieved from
    private final String raplaBaseUrl = "https://api.dhbw.dev/rapla/lectures/";

    // Initialize baseUrl for proxy request to rapla
    public AppointmentController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(raplaBaseUrl).build();
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
}
