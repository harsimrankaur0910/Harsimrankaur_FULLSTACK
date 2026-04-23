package com.naukri.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ApplicationController {

    @Autowired
    private ApplicationRepository repo;

    @PostMapping("/apply")
    public Application apply(@RequestBody Application app) {
        return repo.save(app);
    }

    @GetMapping("/applications")
    public List<Application> getApplications() {
        return repo.findAll();
    }
}