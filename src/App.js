import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./utils/constants";

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
                  {Math.round((country.population * 100) / 100).toFixed(1)}
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
