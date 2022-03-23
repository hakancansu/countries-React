import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [countrys, setCountry] = useState([]);
  const [serch, setSearch] = useState("");
  const handleChange = (event) => setSearch(event.target.value);

  useEffect(() => {
    // fetch("https://restcountries.com/v2/all")
    // .then(response =>response.json())
    // .then(response=>setCountry(response));
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountry(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#8ec3c9" }}>ulkeler</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          name="serch"
          placeholder="serach.."
          value={serch}
          onChange={handleChange}
          style={{ border: "1px solid #8ec3c9" }}
          type="text"
        ></input>
      </div>

      {countrys
        .filter((country) =>
          country.name.toLowerCase().includes(serch.toLowerCase())
        )
        .map((country) => {
          return (
            <div
              style={{
                display: "flex",
                border: "1px solid #8ec3c9",
                margin: "10px",
                padding: "5px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src={country.flag}
                alt="bayrak"
              ></img>
              <div style={{ padding: "5px" }}>
                <h2>{country.name}</h2>
                <h4>{country.capital}</h4>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
