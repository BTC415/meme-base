"use client"
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const chart = {
  series: [44, 55, 41, 17, 15, 15, 15, 20],
  options: {
    // chart: {
    //   events: {
    //     mounted: (chart: any) => {
    //       chart.windowResizeHandler();
    //     }
    //   }
    // },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    // dataLabels: {
    //   enabled: false
    // },
    fill: {
      type: 'gradient',
    },
    legend: {
      // formatter: function(val, opts) {
      //   return val + " - " + opts.w.globals.series[opts.seriesIndex]
      // }
      show: false
    },
    // title: {
    //   text: 'Gradient Donut with custom Start-angle',
    // },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};

const HoldersChart = () => {
  return <ReactApexChart options={chart.options} series={[44, 55, 41, 17, 15,15,15,20]} type="pie" />
}

export default HoldersChart;