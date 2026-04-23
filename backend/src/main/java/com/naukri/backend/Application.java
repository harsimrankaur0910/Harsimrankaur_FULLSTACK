package com.naukri.backend;

import jakarta.persistence.*;

@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String jobTitle;

    public Application() {}

    public Application(String name, String email, String jobTitle) {
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getJobTitle() { return jobTitle; }
}