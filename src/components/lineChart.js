import React from 'react';

import {Line} from 'react-chartjs-2';

const data = {
  //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      type: 'line',
      label: 'active',
      data: [200, 200, 200, 200, 200, 200, 200],
      fill: false,
      backgroundColor: '#101357',
      borderColor: '#fbaf08',
      hoverBackgroundColor: '#101357',
      hoverBorderColor: '#71B37C',
  },
  {
      type: 'line',
      label: 'confirmed',
      data: [100, 300, 200, 50, 40, 90, 100],
      fill: false,
      backgroundColor: '#101357',
      borderColor: '#62A87C',
      hoverBackgroundColor: '#101357',
      hoverBorderColor: '#71B37C',
    },
  {
      type: 'line',
      label: 'death',
      data: [10, 700, 200, 50, 40, 90, 100],
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
  scales: {
    xAxes: [
      {
        ticks: {
            callback: function(tick, index, array) {
                return (index % 3) ? "" : tick;
            },
            fontColor: "white",
            fontSize: 8,
            stepSize: 50,
            beginAtZero: true
        },
        display: true,
        gridLines: {
          display: false
        },
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      }
    ],
    yAxes: [
      {
        ticks: {
            fontColor: "white",
            fontSize: 8,
            stepSize: 50,
            beginAtZero: true
        },
        type: 'linear',
        display: true,
        position: 'left',
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
    afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("This text drawn by a plugin", 100, 100);
    }
}];
class LineChart extends React.Component{

  render() {

    return (
      <div>
        <Line data={data} options={options}  />
      </div>
    );
  }
}

export default LineChart;
