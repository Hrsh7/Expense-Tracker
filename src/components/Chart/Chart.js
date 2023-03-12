import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) =>  (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
export default Chart;
