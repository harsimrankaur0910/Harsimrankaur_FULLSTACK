function Categories() {
  const cats = [
    "Remote","MNC","Fortune 500","Marketing",
    "Fresher","Software","Engineering","Internship","Startup"
  ];

  return (
    <div className="categories">
      {cats.map((c, i) => (
        <div className="cat-card" key={i}>{c}</div>
      ))}
    </div>
  );
}

export default Categories;