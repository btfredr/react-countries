import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./utils/constants";
import Filter from "./components/Filter";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios(API_URL);
      setCountries(response.data);
    };
    getCountries();
  }, []);

  return (
    <div className="appContainer">
      <h1 className="title">REST Countries</h1>
      <Filter countries={countries} setCountries={setCountries} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Region</th>
            <th>Area (m²)</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => {
            return (
              <tr>
                <td>
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="countryFlag"
                  />
                  {country.name}
                </td>
                <td>{country.region}</td>
                <td>{country.area}</td>
                <td>
                  {Math.abs(country.population) > 999
                    ? Math.sign(country.population) *
                        (Math.abs(country.population) / 1000000).toFixed(1) +
                      "m"
                    : Math.sign(country.population) *
                      Math.abs(country.population)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
