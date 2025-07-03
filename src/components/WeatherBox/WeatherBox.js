import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useState, useCallback } from 'react';

const WeatherBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCityChange = useCallback((city) => {
    if (!city) {
      return;
    }

    setIsLoading(true);

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9302906cfdb7f28449954dd9590d745&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === '404') {
          throw new Error(data.message);
        }

        const weatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main,
        };

        console.log('weatherData: ', weatherData);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section>
      <PickCity onCityChange={handleCityChange} />
      {!isLoading ? <WeatherSummary /> : <Loader />}
    </section>
  );
};

export default WeatherBox;
