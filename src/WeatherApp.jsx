// import { useState } from "react";
// import SearchBox from "./SearchBox.jsx";
// import InfoBox from "./infoBox.jsx";
// import ForecastBox from "./ForecastBox.jsx";
// import TemperatureChart from "./TemperatureChart.jsx";
// import "./WeatherApp.css";


// export default function WeatherApp() {
//     const [weatherInfo, setWeatherInfo] = useState({
//         current: {
//             city: "Mumbai",
//             feelsLike: 39.99,
//             humidity: 66,
//             temp: 32.99,
//             tempMax: 32.99,
//             tempMin: 31.94,
//             weather: "haze",
//         },
//         forecast: [
//             { date: "2024-07-10T09:00:00", temp: 30, weather: "clear" },
//             { date: "2024-07-10T12:00:00", temp: 31, weather: "cloudy" },
//             { date: "2024-07-11T09:00:00", temp: 29, weather: "rain" },
//             // Add more forecast data as needed
//         ],
//     });

//     let updateInfo = (newInfo) => {
//         setWeatherInfo(newInfo);
//     };

//     return (
//         <div className="weather-app">
//             <h2>Weather App</h2>
//             <SearchBox updateInfo={updateInfo} />
//             <div className="weather-content">
//                 <InfoBox info={weatherInfo.current} />
//                 <div className="forecast-boxes">
//                     <div className="daily-forecast">
//                         <ForecastBox forecast={weatherInfo.forecast} />
//                     </div>
//                 </div>
//             </div>
//             <div className="temperature-chart">
//                 <TemperatureChart forecast={weatherInfo.forecast} />
//             </div>
//         </div>
//     );
// }



import React, { useState } from 'react';
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./infoBox.jsx";
import ForecastBox from "./ForecastBox.jsx";
import TemperatureChart from "./TemperatureChart.jsx";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        current: {
            city: "Mumbai",
            feelsLike: 39.99,
            humidity: 66,
            temp: 32.99,
            tempMax: 32.99,
            tempMin: 31.94,
            weather: "haze",
        },
        forecast: [
            { date: "2024-07-10T12:00:00", temp: 31, weather: "cloudy" },
            { date: "2024-07-11T09:00:00", temp: 29, weather: "rain" },
            { date: "2024-07-12T09:00:00", temp: 28, weather: "sunny" },
            { date: "2024-07-13T09:00:00", temp: 27, weather: "partly cloudy" },
            { date: "2024-07-14T09:00:00", temp: 26, weather: "thunderstorm" },
            { date: "2024-07-15T09:00:00", temp: 30, weather: "clear" }
        ],
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="weather-app">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <div className="weather-content">
                <InfoBox info={weatherInfo.current} />
                <div className="forecast-boxes">
                    <div className="daily-forecast">
                        <ForecastBox forecast={weatherInfo.forecast} />
                    </div>
                </div>
            </div>
            <div className="temperature-chart">
                <TemperatureChart forecast={weatherInfo.forecast} />
            </div>
        </div>
    );
}
