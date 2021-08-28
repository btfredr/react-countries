import axios from "axios";
import { useState } from "react";

const Languages = () => {
  const [languages, setLanguages] = useState([]);

  const filterBy = async (language) => {
    if (language === "Filter languages") {
      const getLanguage = async () => {
        const response = await axios(
          `https://restcountries.eu/rest/v2/lang/en`
        );
        setLanguages(response.data);
        console.log(response.data[0]);
      };
      getLanguage();
    } else {
      const getLanguage = async () => {
        const response = await axios(
          `https://restcountries.eu/rest/v2/lang/${language}`
        );
        setLanguages(response.data);
      };
      getLanguage();
    }
  };
  return (
    <>
      <div className="filter">
        <select
          name="select"
          id="select"
          className="select"
          onChange={(val) => filterBy(val.target.value)}
        >
          <option value="Filter languages">Filter languages</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Countries</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((language) => {
            return (
              <tr>
                <td>{language.languages[0].name}</td>
                <td>
                  <img src={language.flag} alt="" className="countryFlag" />
                  {language.name}
                </td>
                <td>{(language.population / 1000000).toFixed(1)}m</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Languages;
