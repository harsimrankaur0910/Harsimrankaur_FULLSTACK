package com.naukri.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/jobs")
    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    @PostMapping("/jobs")
    public Job addJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }
}