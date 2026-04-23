function Services() {
  const services = [
    { name: "Resume Building", icon: "📄" },
    { name: "Career Guidance", icon: "🎯" },
    { name: "Interview Prep", icon: "💼" },
    { name: "Premium Jobs", icon: "⭐" }
  ];

  return (
    <div className="services-section" id="services">
      <h2>Our Services</h2>

      <div className="services-container">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;