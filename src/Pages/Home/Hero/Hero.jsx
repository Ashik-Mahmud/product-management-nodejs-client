import React, { useEffect, useState } from "react";
import "./Hero.css";
const Hero = ({ handleSearch, getItems }) => {
  const [search, setSearch] = useState("");
  const [searchTerms, setSearchTerms] = useState([]);
  const items = getItems();
  useEffect(() => {
    const uniqueSearchTerms = items.filter(
      (item, ind, arr) => arr.indexOf(item) !== ind
    );
    const uniqueArr = uniqueSearchTerms.filter(
      (item, ind, arr) => arr.indexOf(item) === ind
    );
    setSearchTerms(uniqueArr);

    setTimeout(() => {
      localStorage.removeItem("search");
    }, 3600000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Search Your Product Here</h2>
            <div className="search">
              <input
                type="search"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Your Product"
                value={search}
              />
              <button
                className="btn btn-primary"
                onClick={() => handleSearch(search)}
              >
                Search
              </button>
            </div>
            {searchTerms.length > 0 && (
              <ul className="search-history">
                <span>People Search - </span>
                {searchTerms?.slice(0, 5)?.map((term, ind) => (
                  <li onClick={() => setSearch(term)} key={term + ind}>
                    {term}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
