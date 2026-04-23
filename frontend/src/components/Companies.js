function Companies() {
  const companies = [
  { name: "Google", icon: "🟢" },
  { name: "Amazon", icon: "🛒" },
  { name: "Microsoft", icon: "🪟" },
  { name: "Infosys", icon: "💻" },
  { name: "TCS", icon: "🏢" },
  { name: "Wipro", icon: "🌐" },
  { name: "Accenture", icon: "⚡" },
  { name: "HCL", icon: "🔧" },
  { name: "Capgemini", icon: "🔷" },
  { name: "Deloitte", icon: "📊" },
  { name: "KPMG", icon: "📘" },
  { name: "PwC", icon: "📈" }
];

   return (
    <div className="companies-section" id="companies">

      {/* ✅ HEADING */}
      <h2 className="section-title">Top Companies Hiring</h2>

      {/* ✅ SCROLL CONTAINER */}
      <div className="companies-container">
        {companies.map((c, i) => (
          <div className="company-card" key={i}>
            <div className="company-logo">{c.icon}</div>
            <p>{c.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Companies;