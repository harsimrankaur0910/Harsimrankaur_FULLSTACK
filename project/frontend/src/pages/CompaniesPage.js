function CompaniesPage() {
  const companies = [
    { name: "Google", rating: "4.5", reviews: "10K+" },
    { name: "Amazon", rating: "4.2", reviews: "8K+" },
    { name: "Microsoft", rating: "4.6", reviews: "12K+" },
    { name: "Infosys", rating: "4.0", reviews: "6K+" },
    { name: "TCS", rating: "3.9", reviews: "7K+" },
    { name: "Wipro", rating: "3.8", reviews: "5K+" }
  ];

  return (
    <div className="companies-page">

      <h2>Top companies hiring now</h2>

      <div className="companies-layout">

        {/* FILTER SIDEBAR */}
        <div className="filters">
          <h3>All Filters</h3>

          <div className="filter-group">
            <h4>Company Type</h4>
            <label><input type="checkbox" /> MNC</label>
            <label><input type="checkbox" /> Startup</label>
          </div>

          <div className="filter-group">
            <h4>Location</h4>
            <label><input type="checkbox" /> Bangalore</label>
            <label><input type="checkbox" /> Delhi</label>
          </div>

        </div>

        {/* COMPANY CARDS */}
        <div className="company-list">
          {companies.map((c, i) => (
            <div className="company-card-large" key={i}>
              <h3>{c.name}</h3>
              <p>⭐ {c.rating} | {c.reviews} reviews</p>
              <button>View Jobs</button>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default CompaniesPage;