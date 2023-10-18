import React, { useEffect } from 'react';
import { Charrt,Bar } from 'react-chartjs-2';
import { Chart,CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const MyChart = ({ data }) => {
  const labels = data.map(({ month }) => month);
  const values = data.map(({ value }) => value);

  const canvas = React.useRef(null);

  useEffect(() => {
    // Destroy the old chart before rendering the new one.
    if (chart) {
      chart.destroy();
    }

    // Render the new chart.
    const chart = new Chart(canvas.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Data',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: values,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: '12-Month Bar Chart',
        },
      },
    });

    // Return a cleanup function that will destroy the chart when the component unmounts.
    return () => chart.destroy();
  }, [canvas, data]);

  return <canvas ref={canvas} />;
};

export default MyChart;