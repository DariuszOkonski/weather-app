import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useState, useCallback } from 'react';
import React from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [weather, setWeather] = useState({
    city: '',
    temp: '',
    icon: '',
    description: '',
  });

  const fetchData = (city) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMessage('');

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9302906cfdb7f28449954dd9590d745&units=metric`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }

        return res.json();
      })
      .then((data) => {
        const weatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main,
        };

        setWeather(weatherData);
      })
      .catch((err) => {
        setIsError(true);
        setErrorMessage(err.message);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleCityChange = useCallback((city) => {
    if (!city) {
      return;
    }

    fetchData(city);
  }, []);

  return (
    <section>
      <PickCity onCityChange={handleCityChange} />
      {isError ? (
        <ErrorBox>{errorMessage}</ErrorBox>
      ) : (
        <React.Fragment>
          {!isLoading ? <WeatherSummary weather={weather} /> : <Loader />}
        </React.Fragment>
      )}
    </section>
  );
};

export default WeatherBox;
