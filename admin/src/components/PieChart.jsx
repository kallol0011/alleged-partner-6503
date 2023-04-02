import { Box } from '@chakra-ui/react';
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['In Stock Products', 'Out Of Stock Products'],
    datasets: [
      {
        label: 'Products',
        data: [11, 5],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 7)',
          'rgba(255, 99, 132, 7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box width={{lg:"23vw",sm:"98vw"}}>
      <Pie data={data} />
    </Box>
  );
};

export default PieChart;
