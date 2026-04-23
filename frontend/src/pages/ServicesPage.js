function ServicesPage() {
  const services = [
  {
    title: "Resume Display",
    desc: "Increase your profile visibility to recruiters",
    price: "₹890",
    tag: "Most Popular"
  },
  {
    title: "Priority Applicant",
    desc: "Increase your chance of getting calls",
    price: "₹971",
    tag: "Recommended"
  },
  {
    title: "AI Mock Interview",
    desc: "Practice interviews with AI",
    price: "₹296",
    tag: "Free Trial"
  },
  {
    title: "Resume Writing",
    desc: "Professional resume by experts",
    price: "₹1653",
    tag: ""
  },

  // 🔥 NEW 1
  {
    title: "LinkedIn Profile Boost",
    desc: "Optimize your LinkedIn profile for recruiters",
    price: "₹499",
    tag: "Trending"
  },

  // 🔥 NEW 2
  {
    title: "Career Mentorship",
    desc: "Get 1-on-1 guidance from industry experts",
    price: "₹999",
    tag: "New"
  }
];

  return (
    <div className="services-page">

      <h1 className="services-title">
        Move ahead in career, faster
      </h1>

      <p className="services-sub">
        with our premium services
      </p>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card-large" key={i}>

            {s.tag && (
  <span className={`tag ${s.tag.replace(" ", "-").toLowerCase()}`}>
    {s.tag}
  </span>
)}

            <h3>{s.title}</h3>
            <p>{s.desc}</p>

            <h4>{s.price}</h4>

            <button>Know More</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ServicesPage;