package com.example.dhbwstudysmartbackend.controller;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;

import com.example.dhbwstudysmartbackend.entity.Document;
import com.example.dhbwstudysmartbackend.repository.DocumentRepository;

import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/document")
@CrossOrigin(origins = "http://localhost:4200")
public class DocumentController {
    @Autowired
    private DocumentRepository documentRepository;

    // Get all document entities from the database
    @GetMapping("/getall")
    public List<Document> getAllDocumentEntities() {
        return documentRepository.findAll();
    }

    // Get the document entity by ID from the database
    private Document getDocument(@PathVariable("id") Long id) {
        return documentRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
    }

    @GetMapping("/download/{id}")
    public void downloadFile(HttpServletResponse response, @PathVariable("id") String id) throws IOException {
        // Get the filename and path of the document from the id
        Document foundDocument = this.getDocument(Long.parseLong(id));
        String filename = foundDocument.getFilename();
        String filepath = foundDocument.getPath();

        // Load file from resources folder
        Resource resource = new ClassPathResource(filepath);

        // Set the content type and attachment header
        response.setContentType(MediaType.APPLICATION_PDF_VALUE); // TODO: dynamically determine MediaType
        response.setHeader("Content-Disposition", "attachment; filename=" + filename);

        // Copy the stream to the response's output stream
        try (InputStream in = resource.getInputStream(); OutputStream out = response.getOutputStream()) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }
        }
    }
}
