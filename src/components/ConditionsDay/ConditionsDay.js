import React from "react";

import classes from "./ConditionsDay.module.css";

const ConditionsDay = (props) => {
  let day_data = props.data;

  return (
    <div>
      <div className={classes.datediv}>
        <strong>
          {day_data.index
            ? new Date(
                new Date(Date.now()).setDate(
                  new Date(Date.now()).getDate() + day_data.index
                )
              ).toLocaleDateString()
            : new Date(Date.now()).toLocaleDateString()}
        </strong>
      </div>
      <div className={classes.itemdiv}>
        <div className={classes.labeldiv}>Current Temp</div>
        <div className={classes.valuediv}>{Math.round(day_data.temp.day)}F</div>
      </div>
      <div className={classes.itemdiv}>
        <div className={classes.labeldiv}>Feels Like</div>
        <div className={classes.valuediv}>
          {Math.round(day_data.feels_like.day)}F
        </div>
      </div>
      <div className={classes.itemdiv}>
        <div className={classes.labeldiv}>Low Temp</div>
        <div className={classes.valuediv}>{Math.round(day_data.temp.min)}F</div>
      </div>
      <div className={classes.itemdiv}>
        <div className={classes.labeldiv}>High Temp</div>
        <div className={classes.valuediv}>{Math.round(day_data.temp.max)}F</div>
      </div>
      <div className={classes.itemdiv}>
        <div className={classes.labeldiv}>Humidity</div>
        <div className={classes.valuediv}>{day_data.humidity}%</div>
      </div>
      <div className={classes.itemdiv}>
        <div className={classes.labeldiv}>Overcast %</div>
        <div className={classes.valuediv}>{day_data.clouds}%</div>
      </div>
      <div className={classes.itemdiv}>
        <div className={classes.labeldiv}>Weather</div>
        <div className={classes.valuediv}>{day_data.weather[0].main}</div>
      </div>
      <div className={classes.bottomdiv}></div>
    </div>
  );
};
export default ConditionsDay;
