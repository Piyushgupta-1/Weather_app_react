import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function TemperatureChart({ forecast }) {
    const data = {
        labels: forecast.map(day => new Date(day.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: forecast.map(day => day.temp),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '7-Day Temperature Trend',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date', 
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
            },
        },
    };

    return <Line data={data} options={options} />;
}
