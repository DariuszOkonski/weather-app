import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';

const WeatherBox = (props) => {
  const handleSubmit = (city) => {
    console.log('WeatherBox city: ', city);
  };

  return (
    <section>
      <PickCity onSubmit={handleSubmit} />
      <WeatherSummary />
      <Loader />
    </section>
  );
};

export default WeatherBox;
