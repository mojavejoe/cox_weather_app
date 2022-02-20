import React from "react";

import classes from "./Conditions.module.css";
import ConditionsDay from "../ConditionsDay/ConditionsDay";

const Conditions = (props) => {
  let tmp = props.responseObj;

  //get the 3 forecast days
  let forecast_days = [];
  if (tmp && tmp.list) {
    for (let i = 1; i < 4; i++) {
      tmp.list[i].index = i; //add an index for use in mocking dates
      forecast_days.push(tmp.list[i]);
    }
  }

  return (
    <div className={classes.Wrapper}>
      {props.error && (
        <small className={classes.Small}>Enter a city name or zip code</small>
      )}
      {props.loading && <div className={classes.Loader}></div>}
      {tmp && tmp.cod === "200" ? (
        <div className={classes.mainforecastdiv}>
          <p>
            <strong>Current conditions in {tmp.city.name}</strong>
          </p>
          <div className={classes.daydiv}>
          <ConditionsDay data={tmp.list[0]} />
          </div>
          <br></br>
          <p>
            <strong>------3 day Forecast-------</strong>
          </p>
          <div className={classes.mainforecastdiv}>
            <div className={classes.forecastdiv}>
              {forecast_days.map((data) => {
                return (
                  <div className={classes.daydiv}>
                    <ConditionsDay data={data} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Conditions;
