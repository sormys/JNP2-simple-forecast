import React from 'react';
import styled from 'styled-components';

const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
  border-radius: 0.25rem;
  padding: 1rem;
`;

const WeatherIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
`;

const Temperature = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.foreground};
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.comment};
`;

const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const WeatherDataItem = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.comment};
  margin-bottom: 0.25rem;

  span.label {
    color: ${props => props.theme.comment};
  }

  span.value {
    color: ${props => props.theme.foreground};
    font-weight: bold;
    margin-left: 0.25rem;
  }
`
function CurrentWeather({ data }) {
  if (data === null) {
    return null;
  }

  const temperature = data.temp_c;
  const condition = data.condition.text;
  const icon = "https:" + data.condition.icon;

  const weatherData = [
    { label: "Last updated:", value: data.last_updated },
    { label: "Wind speed:", value: `${data.wind_kph} kph` },
    { label: "Wind direction:", value: data.wind_dir },
    { label: "Pressure:", value: `${data.pressure_mb} mb` },
    { label: "Humidity:", value: `${data.humidity}%` },
    { label: "Cloud cover:", value: `${data.cloud}%` },
    { label: "Feels like:", value: `${data.feelslike_c}°C` },
    { label: "UV index:", value: data.uv },
  ];

  return (
    <CurrentWeatherContainer>
      <Temperature>{temperature}°C</Temperature>
      <Description>{condition}</Description>
      <WeatherIcon src={icon} alt="Weather icon" />
      <WeatherData>
        {weatherData.map((item, index) => (
          <WeatherDataItem key={index}>
            <span className="label">{item.label}</span>
            <span className="value">{item.value}</span>
          </WeatherDataItem>
        ))}
      </WeatherData>
    </CurrentWeatherContainer>
  );
}

export default CurrentWeather;