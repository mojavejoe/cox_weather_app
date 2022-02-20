import React, { useState } from "react";
import Select from "react-select";

import classes from "./Forecast.module.css";

import Conditions from "../Conditions/Conditions";

const Forecast = () => {
  let [city, setCity] = useState("");
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [options, setStoredOptions] = useState(
    JSON.parse(localStorage.getItem("locationList")) || []
  );

  const api_header = "community-open-weather-map.p.rapidapi.com";
  const api_key = "0f46a126d0mshb0ca76750fa1a4bp1978b4jsn2dca2e1f264d";
  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    setError(false);
    setResponseObj({});

    setLoading(true);

    let fetch_url = ``;
    fetch_url = getFetchURL(city);

    fetch(fetch_url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": api_header,
        "x-rapidapi-key": api_key,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.cod.toString() !== "200") {
          throw new Error();
        }
        setStoredCities(city);
        setLoading(false);
        setResponseObj(response);
      })
      .catch((err) => {
        console.log("err = " + JSON.stringify(err));

        setError(true);
        setLoading(false);
      });
  }

  function getFetchURL(search_term) {
    let url = "";
    if (Number(search_term)) {
      url = `https://community-open-weather-map.p.rapidapi.com/forecast/daily?units=imperial&zip=${uriEncodedCity}`;
    } else {
      url = `https://community-open-weather-map.p.rapidapi.com/forecast/daily?units=imperial&q=${uriEncodedCity}`;
    }
    return url;
  }

  //if the searched city isn't in the current list of searched cities, add it
  function setStoredCities(new_city) {
    let tmp_cities = [];
    if (options.find((o) => o.label === new_city) == null) {
      tmp_cities = options;
      tmp_cities.push({ value: new_city, label: new_city });

      setStoredOptions(tmp_cities);
      localStorage.setItem("locationList", JSON.stringify(tmp_cities));
    }
  }

  function handleSelectionFromList(e) {
    if (!e.value) return;

    setCity(e.value); //works for selecting from list
  }

  function handleManualEntry(e) {
    if (e.length === 0) return;

    setCity(e);
  }

  function removeSelected() {
    let tmp_options = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].label.toString().toUpperCase() !== city.toUpperCase()) {
        tmp_options.push(options[i]);
      }
    }

    setCity("");
    setStoredOptions([]);
    setStoredOptions(tmp_options);
    setResponseObj(null);
    localStorage.setItem("locationList", JSON.stringify(tmp_options));
  }

  return (
    <div>
      <div>
        <div className={classes.mainselectdiv}>
          <form onSubmit={getForecast} className={classes.getforecastdiv}>
            <Select
              className={classes.selectdiv}
              name="select-div"
              placeholder="Enter or Select City..."
              value={city ? city.value : null}
              onChange={(e) => handleSelectionFromList(e)} //governs selection from the list.
              onInputChange={(e) => handleManualEntry(e)} //governs manual entry of city
              options={options}
            ></Select>
            <button className={classes.Button} type="submit">
              Get Forecast
            </button>
          </form>
          <div className={classes.removediv}>
            <button
              className={classes.deleteButton}
              onClick={() => removeSelected()}
            >
              Remove Selected
            </button>
          </div>
        </div>
      </div>

      <div>
        <Conditions responseObj={responseObj} error={error} loading={loading} />
      </div>
    </div>
  );
};
export default Forecast;