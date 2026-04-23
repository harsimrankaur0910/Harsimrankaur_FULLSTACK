import React, { useEffect, useState } from "react";

function Jobs({ search }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  const applyJob = (jobTitle) => {
    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");

    if (!name || !email) {
      alert("Please fill all details");
      return;
    }

    fetch("http://localhost:8080/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, jobTitle })
    })
      .then(res => res.json())
      .then(() => alert("Applied Successfully 🚀"))
      .catch(err => console.error(err));
  };

const filteredJobs = jobs.filter((job) => {
  const keyword = (search || "").trim().toLowerCase();

  if (keyword === "") return true; // ✅ show all jobs

  return (
    job.title.toLowerCase().includes(keyword) ||
    job.company.toLowerCase().includes(keyword) ||
    job.location.toLowerCase().includes(keyword)
  );
});

  return (
    <div className="jobs-section">
      <h2>Top Jobs For You</h2>

      <div className="jobs-container">
        {filteredJobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button onClick={() => applyJob(job.title)}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;