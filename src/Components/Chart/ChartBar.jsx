import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  const { value, label, maxVal } = props;
  let barFillHeight = "0%";

  if (maxVal > 0) {
    barFillHeight = Math.round((value / maxVal) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
