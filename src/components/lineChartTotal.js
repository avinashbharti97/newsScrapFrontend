import React from 'react';

import {Line} from 'react-chartjs-2';

const LineChartTotal = ({dailyData})=>{
const data = {
  //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      type: 'line',
      label: 'cnf',
      data: [...dailyData.TotalConfirmedNumbers],
      fill: false,
      backgroundColor: '#101357',
      borderColor: '#fbaf08',
      hoverBackgroundColor: '#101357',
      hoverBorderColor: '#71B37C',
  },
  {
      type: 'line',
      label: 'rec',
      data: [...dailyData.TotalRecoveredNumbers],
      fill: false,
      backgroundColor: '#101357',
      borderColor: '#62A87C',
      hoverBackgroundColor: '#101357',
      hoverBorderColor: '#71B37C',
    },
  {
      type: 'line',
      label: 'dec',
      data: [...dailyData.TotalDeceasedNumbers],
      fill: false,
      backgroundColor: '#101357',
      borderColor: '#BF0603',
      hoverBackgroundColor: '#101357',
      hoverBorderColor: '#71B37C',
    }
  ]
};

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  legend:{
    labels:{
      fontColor: "white",
      fornSize: 8,
      boxWidth: 20
    }
  },
  scales: {
    xAxes: [
      {
        ticks: {
            callback: function(tick, index, array) {
                return (index % 7) ? "" : tick;
            },
            fontColor: "white",
            fontSize: 8,
            beginAtZero: true
        },
        display: true,
        gridLines: {
          display: false
        },
        labels: [...dailyData.dailyDates],
      }
    ],
    yAxes: [
      {
        ticks: {
            fontColor: "white",
            fontSize: 8,
            stepSize: 1000,
            beginAtZero: true
        },
        type: 'linear',
        display: true,
        position: 'right',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  },
};

const plugins = [{
  afterDraw: (c) => {
        //var chartHeight = c.chart.height;
        //var size = chartHeight * 2 / 100;
        //c.scales['y-axis-0'].options.ticks.minor.fontSize = size;
    }
}];

return (
  <div>
    <Line data={data} options={options} plugins = {plugins} />
  </div>
);
}

export default LineChartTotal;
