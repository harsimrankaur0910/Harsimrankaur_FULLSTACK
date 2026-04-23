import React, { useEffect, useState } from "react";

function ApplicationsPage() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Applications</h2>

      {applications.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        <div>
          {applications.map((app, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "10px 0",
                borderRadius: "10px"
              }}
            >
              <h3>{app.jobTitle}</h3>
              <p><strong>Name:</strong> {app.name}</p>
              <p><strong>Email:</strong> {app.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApplicationsPage;