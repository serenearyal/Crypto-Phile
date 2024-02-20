import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./chart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoricChart = () => {
  const { id } = useParams();

  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!response) {
    return <div className="loading">Loading Chart...</div>;
  }

  const coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMMDD")),
    datasets: [
      {
        fill: true,
        label: id,
        borderColor: "gold",
        data: coinChartData.map((point) => Number(point.y).toFixed(20)),
      },
    ],
  };

  return (
    <div className="chart">
      <div className="line">
        <Line className="chart-line" options={options} data={data} />;
      </div>
    </div>
  );
};

export default HistoricChart;
