function Hero({ search, setSearch }) {
  return (
    <div className="hero">
      <h1>Find your dream job now</h1>
      <p>5 lakh+ jobs for you to explore</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter skills / designations / companies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input type="text" placeholder="Select experience" />
        <input type="text" placeholder="Enter location" />

<button onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}>
  Search
</button>      </div>
    </div>
  );
}

export default Hero;