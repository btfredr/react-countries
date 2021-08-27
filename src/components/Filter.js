import { API_URL } from "../utils/constants";
import axios from "axios";

const Filter = ({ setCountries }) => {
  const filterBy = async (category) => {
    if (category === "") {
      return null;
    } else {
      const sortCountries = async () => {
        const response = await axios(`${API_URL}/?fields=${category}`);
        console.log(response.data);

        setCountries(response.data);
      };
      sortCountries();
    }
  };

  //
  return (
    <div className="filter">
      <select
        name="select"
        id="select"
        className="select"
        onChange={(val) => filterBy(val.target.value)}
      >
        <option value="Filter countries">Filter countries</option>
        <option value="name">Name</option>
        <option value="population">Population</option>
        <option value="area">Area</option>
      </select>
    </div>
  );
};

export default Filter;
