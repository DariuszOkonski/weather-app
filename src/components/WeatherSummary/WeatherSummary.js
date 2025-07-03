import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({ weather }) => {
  if (!weather?.city) {
    return null;
  }

  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={weather.city}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${weather.icon}.png`}
      />
      <div className={styles.weatherInfo}>
        <h2>{weather.city}</h2>
        <p>
          <strong>Temp:</strong> {weather.temp}°C
        </p>
        <p>
          <strong>Description:</strong> {weather.description}
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;
