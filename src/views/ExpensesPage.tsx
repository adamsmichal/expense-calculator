import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { styled } from "@material-ui/core/styles";
import { EventTracker, HoverState } from "@devexpress/dx-react-chart";
import { monthlySummary } from "../helpers/helpers";

const Bar = styled(BarSeries)({
  fill: "#53d6fa",
});

export const ExpensesPage: React.FC = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const newData = monthlySummary();
    setData(newData);
  }, []);

  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <Bar valueField="summary" argumentField="month" />
        <EventTracker />
        <HoverState />
      </Chart>
    </Paper>
  );
};
