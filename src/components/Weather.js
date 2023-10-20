import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const Weather = ({ coords }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://api.weatherapi.com/v1/forecast.json?key=b0af4aa93eef48caa3071952233105&q=${coords.latitude},${coords.longitude}`
                );
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [coords]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const renderForecastCarousel = () => {
        if (!weatherData || !weatherData.forecast) {
            return null;
        }

        const forecast = weatherData.forecast;
        return forecast.forecastday[0].hour.map((hour) => (
            <Card key={hour.time_epoch} sx={{ maxWidth: 300 }}>
                <CardContent>
                    <Typography variant="h6">{hour.time}</Typography>
                    <Typography variant="body1">Temperature: {hour.temp_c}°C</Typography>
                    <Typography variant="body1">Condition: {hour.condition.text}</Typography>
                    <img src={hour.condition.icon} alt="icon"/>
                    {/* Add more details you want to display */}
                </CardContent>
            </Card>
        ));
    };

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { location, current } = weatherData;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">{location.name}</Typography>
                <Typography variant="subtitle1">Region: {location.region}</Typography>
                <Typography variant="subtitle1">Country: {location.country}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">Current Weather</Typography>
                <Typography variant="body1">Temperature: {current.temp_c}°C</Typography>
                <Typography variant="body1">Condition: {current.condition.text}</Typography>
                <img src={current.condition.icon} alt="icon"/>
                {/* Add more details you want to display for current weather */}
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">Forecast</Typography>
                <Carousel responsive={responsive}>{renderForecastCarousel()}</Carousel>
            </Grid>
        </Grid>
    );
};

export default Weather;
