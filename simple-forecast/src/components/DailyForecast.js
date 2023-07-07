import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.background};
  border-radius: 0.25rem;
  padding: 1rem;
`;

const DayContainer = styled.div`
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

const Label = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.foreground};
  margin-bottom: 0.5rem;
`;


function DayWeather({ data }) {
    if (data === null) {
      return null;
    }
  
    const temperature = data.avgtemp_c;
    const condition = data.condition.text;
    const icon = "https:" + data.condition.icon;
  
    const weatherData = [
      { label: "Max temperature:", value: `${data.maxtemp_c}°C` },
      { label: "Min temperature:", value: `${data.mintemp_c}°C` },
      { label: "Max wind speed:", value: `${data.maxwind_kph} kph` },
      { label: "Total precipitation:", value: `${data.totalprecip_mm} mm` },
      { label: "Total snow:", value: `${data.totalsnow_cm} cm` },
      { label: "Average visibility:", value: `${data.avgvis_km} km` },
      { label: "Average humidity:", value: `${data.avghumidity}%` },
      { label: "UV index:", value: data.uv },
    ];
  
    return (
      <DayContainer>
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
      </DayContainer>
    );
  }




function DailyForecast() {
    const forecast = useSelector(state => {
        console.log("currentDaily " + state.cache.current)
        const cached = state.cache.map.get(state.cache.current)
        console.log("cachedDaily "+ cached + " " + state.cache.current.city + " " + state.cache.current.country)
        console.log(state.cache.map)
        if(cached !== undefined)
            console.log(cached.data.current)
        return cached !== undefined ? cached.data : null
    })

  if (forecast === null) {
    return null;
  }

  return (
    <WeatherContainer>
      <DayWeather data={forecast.forecast.forecastday[0].day} />
      <DayWeather data={forecast.forecast.forecastday[1].day} />
      <DayWeather data={forecast.forecast.forecastday[2].day} />
    </WeatherContainer>
  );
}

export default DailyForecast;