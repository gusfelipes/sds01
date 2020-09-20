import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import Filters from "../../components/Filters";
import { barOptions, pieOptions } from "./chart-options";
import "./styles.css";
import {
  buildBarSeries,
  getGenderChartData,
  getPlatformChartData,
} from "./helpers";

type pieChartData = {
  labels: string[];
  series: number[];
};

type barChartData = {
  x: string;
  y: number;
};

const initialPieData = {
  labels: [],
  series: [],
};

const BASE_URL = "https://sds01-gusfelipes.herokuapp.com";

const Charts = () => {
  const [barChartData, setBarChartData] = useState<barChartData[]>([]);
  const [platformData, setPlatformData] = useState<pieChartData>(
    initialPieData
  );
  const [genderData, setGenderData] = useState<pieChartData>(initialPieData);

  useEffect(() => {
    async function getData() {
      const recordsResponse = await axios.get(`${BASE_URL}/records`);
      const gamesResponse = await axios.get(`${BASE_URL}/games`);

      const barData = buildBarSeries(
        gamesResponse.data,
        recordsResponse.data.content
      );

      const platformChartData = getPlatformChartData(
        recordsResponse.data.content
      );
      const genderChartData = getGenderChartData(recordsResponse.data.content);

      setBarChartData(barData);
      setPlatformData(platformChartData);
      setGenderData(genderChartData);
    }
    getData();
  }, []);

  return (
    <div className="page-container">
      <Filters link="/records" linkText="VER TABELA" />
      <div className="chart-contanier">
        <div className="top-related">
          <h1 className="top-related-title">JOGOS MAIS VOTADOS</h1>
          <div className="games-container">
            <Chart
              options={barOptions}
              type="bar"
              width="600"
              height="650"
              series={[{ data: barChartData }]}
            />
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            <Chart
              options={{ ...pieOptions, labels: platformData?.labels }}
              series={platformData?.series}
              type="donut"
              width="300"
            />
          </div>
          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
            <Chart
              options={{ ...pieOptions, labels: genderData?.labels }}
              series={genderData?.series}
              type="donut"
              width="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
