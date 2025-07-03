import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useState } from 'react';

const WeatherBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCityChange = (city) => {
    console.log('WeatherBox city: ', city);
  };

  return (
    <section>
      <PickCity onCityChange={handleCityChange} />
      {!isLoading ? <WeatherSummary /> : <Loader />}
    </section>
  );
};

export default WeatherBox;
