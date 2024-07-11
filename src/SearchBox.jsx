import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let [errorMessage, setErrorMessage] = useState("");
    let [open, setOpen] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = "adca052475571a35eee137fcc8e24170";  // Replace with your actual API key

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (response.ok) {
                let result = {
                    current: {
                        city: city,
                        temp: jsonResponse.main.temp,
                        tempMin: jsonResponse.main.temp_min,
                        tempMax: jsonResponse.main.temp_max,
                        humidity: jsonResponse.main.humidity,
                        feelsLike: jsonResponse.main.feels_like,
                        weather: jsonResponse.weather[0].description,
                    },
                    forecast: []
                };

                // Fetch forecast data using the coordinates
                let forecastResponse = await fetch(`${FORECAST_URL}?lat=${jsonResponse.coord.lat}&lon=${jsonResponse.coord.lon}&appid=${API_KEY}&units=metric`);
                let forecastJson = await forecastResponse.json();

                if (forecastResponse.ok) {
                    result.forecast = forecastJson.list.map(item => ({
                        date: new Date(item.dt * 1000).toLocaleDateString(),
                        temp: item.main.temp,
                        weather: item.weather[0].description,
                    }));
                } else {
                    throw new Error(forecastJson.message);
                }

                return result;
            } else {
                throw new Error(jsonResponse.message);
            }
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        } catch (err) {
            setErrorMessage(err.message);
            setError(true);
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="error-modal-title"
                aria-describedby="error-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography id="error-modal-title" variant="h6" component="h2">
                            Error
                        </Typography>
                        <IconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography id="error-modal-description" sx={{ mt: 2 }}>
                        {errorMessage}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
