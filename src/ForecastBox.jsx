import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./ForecastBox.css";

export default function ForecastBox({ forecast }) {
    if (!Array.isArray(forecast)) {
        return null;
    }

    const dailyForecast = [];

    forecast.forEach(item => {
        const itemDate = new Date(item.date);
        const dayDateString = itemDate.toLocaleDateString();

        if (!dailyForecast.find(d => new Date(d.date).toLocaleDateString() === dayDateString)) {
            dailyForecast.push(item);
        }
    });

    return (
        <div className="ForecastBox">
            <div className='heading'>
                <h1>Daily Weather Forecast</h1>
                <div className="forecast">
                    {dailyForecast.map((day, index) => (
                        <Card key={index} className="row">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {new Date(day.date).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Temperature: {day.temp}°C
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Weather: {day.weather}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
