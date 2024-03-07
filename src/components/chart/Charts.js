import "./Chart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../table/Table";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Charts(props) {
  const [info, setInfo] = useState([]);
  //console.log("From" + props.location.state);
  const myparam = props.location.state || {};
  const idvalue = myparam.id === "undefined" ? "bitcoin" : myparam.id;
  //console.log("in chart" + myparam.total_volume);
  console.log("idvalue= " + idvalue);
  //console.log("from charts " + props.location.state);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${idvalue}/market_chart?vs_currency=inr&days=6&interval=daily`
      )
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idvalue]);
  const today = new Date();
  //console.log(today.toLocaleDateString());
  //const currentdate=today.toLocaleDateString();
  const dates = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6)
      .toLocaleDateString()
      .substr(0, 10),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5)
      .toLocaleDateString()
      .substr(0, 10),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4)
      .toLocaleDateString()
      .substr(0, 10),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3)
      .toLocaleDateString()
      .substr(0, 10),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2)
      .toLocaleDateString()
      .substr(0, 10),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)
      .toLocaleString()
      .substr(0, 9),
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
      .toLocaleDateString()
      .substr(0, 10)
  ];
  let prices = info.prices;
  //console.log("ho " + prices);
  return (
    <div className="info">
      <div className="chart">
        <h1>Price change</h1>
        <Line
          data={{
            // x-axis label values
            labels: dates,
            datasets: [
              {
                label: "Price",
                // y-axis data plotting values
                data: prices,
                //data:[1,2,3],
                fill: false,
                borderWidth: 4,
                pointRadius: 5,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "green",
                responsive: true
              }
            ]
          }}
          options={{
            plugins: {
              legend: {
                onClick: null
              }
            }
          }}
        />
      </div>
      <div className="coininfo bg-dark">
        <Table myparam={myparam} />
      </div>
    </div>
  );
}
/*options={{
  plugins: {
    legend: {
      display: true
    }
  }
}}*/
