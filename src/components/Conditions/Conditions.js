import React from "react";

import classes from "./Conditions.module.css";

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
            <div className={classes.datediv}>
              <strong>{new Date(Date.now()).toLocaleDateString()}</strong>
            </div>
            <div className={classes.itemdiv}>
              <div className={classes.labeldiv}>Current Temp</div>
              <div className={classes.valuediv}>
                {Math.round(tmp.list[0].temp.day)}F
              </div>
            </div>
            <div className={classes.itemdiv}>
              <div className={classes.labeldiv}>Feels Like</div>
              <div className={classes.valuediv}>
                {Math.round(tmp.list[0].feels_like.day)}F
              </div>
            </div>
            <div className={classes.itemdiv}>
              <div className={classes.labeldiv}>Low Temp</div>
              <div className={classes.valuediv}>
                {Math.round(tmp.list[0].temp.min)}F
              </div>
            </div>
            <div className={classes.itemdiv}>
              <div className={classes.labeldiv}>High Temp</div>
              <div className={classes.valuediv}>
                {Math.round(tmp.list[0].temp.max)}F
              </div>
            </div>
            <div className={classes.itemdiv}>
              <div className={classes.labeldiv}>Humidity</div>
              <div className={classes.valuediv}>{tmp.list[0].humidity}%</div>
            </div>
            <div className={classes.itemdiv}>
              <div className={classes.labeldiv}>Overcast %</div>
              <div className={classes.valuediv}>{tmp.list[0].clouds}%</div>
            </div>
            <div className={classes.itemdiv}>
              <div className={classes.labeldiv}>Weather</div>
              <div className={classes.valuediv}>
                {tmp.list[0].weather[0].main}
              </div>
            </div>
            <div className={classes.bottomdiv}></div>
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
                    <div className={classes.datediv}>
                      <strong>
                        {new Date(
                          new Date(Date.now()).setDate(
                            new Date(Date.now()).getDate() + data.index
                          )
                        ).toLocaleDateString()}
                      </strong>
                    </div>
                    <div className={classes.itemdiv}>
                      <div className={classes.labeldiv}>Current Temp</div>
                      <div className={classes.valuediv}>
                        {Math.round(data.temp.day)}F
                      </div>
                    </div>
                    <div className={classes.itemdiv}>
                      <div className={classes.labeldiv}>Feels Like</div>
                      <div className={classes.valuediv}>
                        {Math.round(data.feels_like.day)}F
                      </div>
                    </div>
                    <div className={classes.itemdiv}>
                      <div className={classes.labeldiv}>Low Temp</div>
                      <div className={classes.valuediv}>
                        {Math.round(data.temp.min)}F
                      </div>
                    </div>
                    <div className={classes.itemdiv}>
                      <div className={classes.labeldiv}>High Temp</div>
                      <div className={classes.valuediv}>
                        {Math.round(data.temp.max)}F
                      </div>
                    </div>
                    <div className={classes.itemdiv}>
                      <div className={classes.labeldiv}>Humidity</div>
                      <div className={classes.valuediv}>{data.humidity}%</div>
                    </div>
                    <div className={classes.itemdiv}>
                      <div className={classes.labeldiv}>Overcast %</div>
                      <div className={classes.valuediv}>{data.clouds}%</div>
                    </div>
                    <div className={classes.itemdiv}>
                      <div className={classes.labeldiv}>Weather</div>
                      <div className={classes.valuediv}>
                        {data.weather[0].main}
                      </div>
                    </div>
                    <div className={classes.bottomdiv}></div>
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
