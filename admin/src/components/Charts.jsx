import React, { useRef, useEffect, useState } from 'react';
import { Bar, Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import { Box } from '@chakra-ui/react';



const BarChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const chartData = {
      labels: ['watch', 'Product', 'Mobile', 'Cream', 'Clothes','Kitchen', 'shoe', 'jewellery', 'laptop'],
      datasets: [{
        label: 'products',
        data: [10,24,14,17,15,10,15,15,15],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    setChartData(chartData);
  }, []);

  return (
    <Box width={{lg:"43vw",sm:"98vw"}}>
      {chartData && (
        <Bar
          ref={chartRef}
          data={chartData}
          options={{
            scales: {
              y: {
                type: 'linear',
                beginAtZero: true
              }
            }
          }}
        />
      )}
    </Box>
  );
};

export default BarChart;
