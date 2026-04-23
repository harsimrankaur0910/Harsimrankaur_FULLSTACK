function Discover() {
  const roles = [
    { title: "Full Stack Developer", jobs: "23K+ Jobs" },
    { title: "Frontend Developer", jobs: "5K+ Jobs" },
    { title: "Backend Developer", jobs: "8K+ Jobs" },
    { title: "DevOps Engineer", jobs: "3K+ Jobs" },
    { title: "Data Scientist", jobs: "6K+ Jobs" },
    { title: "Engineering Manager", jobs: "2K+ Jobs" }
  ];

  return (
    <div className="discover-section">
      <div className="discover-left">
        <h2>Discover jobs across popular roles</h2>
        <p>Select a role and we’ll show you relevant jobs for it!</p>
      </div>

      <div className="discover-right">
        {roles.map((r, i) => (
          <div className="role-card" key={i}>
            <h4>{r.title}</h4>
            <p>{r.jobs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;