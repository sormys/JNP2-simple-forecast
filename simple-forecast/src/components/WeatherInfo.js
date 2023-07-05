import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Audio } from 'react-loader-spinner'

const WeatherInfoContainer = styled.div`
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
`

const Temperature = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.foreground};
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.comment};
`;

const HourlyForecastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

const HourlyForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

const HourlyForecastTime = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.comment};
  margin-bottom: 0.25rem;
`;

const HourlyForecastIcon = styled.i`
  font-size: 1.5rem;
  color: ${props => props.theme.foreground};
  margin-bottom: 0.25rem;
`;

const HourlyForecastTemperature = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.foreground};
`;

function WeatherInfo({ data }) {
  if (data === null) {
      return
  }
  console.log("WeatherInfo")
  console.log(data)
  const temperature = data.temp_c;
  const condition = data.condition.text;
  const icon = "https:" + data.condition.icon;
  console.log(icon)

  return (
    <WeatherInfoContainer>
        <Temperature>{temperature}°C</Temperature>
        <Description>{condition}</Description>
        {console.log(icon)}
        <WeatherIcon src={icon} alt="Weather icon" />
        {/* <HourlyForecastContainer>
          {hourlyForecast.map((forecast) => (
            <HourlyForecastItem key={forecast.time}>
              <HourlyForecastTime>{forecast.time}</HourlyForecastTime>
              <HourlyForecastIcon className={`wi wi-${forecast.icon}`} />
              <HourlyForecastTemperature>{forecast.temperature}°C</HourlyForecastTemperature>
            </HourlyForecastItem>
          ))}
        </HourlyForecastContainer> */}
    </WeatherInfoContainer>
  );
}

export default WeatherInfo;