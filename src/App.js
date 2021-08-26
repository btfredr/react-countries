import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./utils/constants";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios(API_URL);

      setCountries(response.data);
      console.log(response.data);
      setIsLoading(false);
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
            <th>Area</th>
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
                <td>{country.population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
