import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {

    const HOT_URL = "https://media.istockphoto.com/id/1433096017/photo/irrigation-system-on-agricultural-soybean-field-at-sunset.jpg?s=612x612&w=0&k=20&c=d3ITKQOR-6WP5n9fVYerK7R3hiq_91bbAg024N7fTQ8=";
    const COLD_URL = "https://media.istockphoto.com/id/1289449092/photo/trees-covered-with-ice-after-freezing-rain-in-vladivostok-russia-sparkling-ice-covered.jpg?s=612x612&w=0&k=20&c=ZzshEVVSJRj404NLJrbBSNCyKkyman8pSfcm-PzmD0A=";
    const RAIN_URL = "https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.jpg?s=612x612&w=0&k=20&c=rwkwG1u0eWlOvOxy5GR8n5xNsQtzI-KutnZsQxTM3Ec=";


    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80
           ? <ThunderstormIcon></ThunderstormIcon>
           : info.temp > 15 
           ? <WbSunnyIcon></WbSunnyIcon>
           : <AcUnitIcon></AcUnitIcon>
          }
          
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
            the weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C 
          </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}