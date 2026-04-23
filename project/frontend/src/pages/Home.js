import { useState } from "react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Categories from "../components/Categories";
import Jobs from "../components/Jobs";
import Companies from "../components/Companies";
import Services from "../components/Services";

function Home() {
  const [search, setSearch] = useState(""); //  ADD THIS

  return (
    <>
      <Hero search={search} setSearch={setSearch} /> {/*  PASS HERE */}
      <Discover />
      <Categories />
      <Jobs search={search} /> {/*  PASS HERE */}
      <Companies />
      <Services />
    </>
  );
}

export default Home;