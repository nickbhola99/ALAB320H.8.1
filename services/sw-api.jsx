import { useState, useEffect } from "react";
import StarshipCard from "../components/StarshipCard";
import "../src/App.css";
export default function Starships(props) {
  const url = `https://swapi.dev/api/starships/`;

  // State for starships.
  const [ships, setStarships] = useState();

  // Function to fetch starships.
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStarships(data.results);
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect to run getData initially
  useEffect(() => {
    getData();
  }, []);

  // loaded function for when data is fetched.
  //data is loaded in StarshipCard component, returns a card with data on each ship
  const loaded = () => {
    return ships.map((ship) => (
      <div className="list">
        <div className="column">
          <StarshipCard props={ship} />
        </div>
      </div>
    ));
  };

  // Function for when data is loading
  const loading = () => {
    return <h1>Loading...</h1>;
  };


  return ships ? loaded() : loading();
}
