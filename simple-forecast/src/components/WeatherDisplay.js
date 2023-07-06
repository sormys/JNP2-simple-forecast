import React from 'react';
import { useSelector } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';
import Loader from './Loader';
import { TabsNames } from '../redux/reducers/tabs';
import styled from 'styled-components';

const CityNameContainer = styled.div`
  text-align: center;
`;

const CityNameText = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 1rem;
`;

const NormalText = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const NiceLevelText = styled.span`
  color: ${props => props.theme.accent};
`;

function WeatherDisplay() {
  const currentTab = useSelector(state => state.tabs.current);
  const isLoading = useSelector(state => state.cache.isLoading);
  const forecast = useSelector(state => {
    console.log("current " + state.cache.current)
    const cached = state.cache.map.get(state.cache.current)
    console.log("cached "+ cached + " " + state.cache.current.city + " " + state.cache.current.country)
    console.log(state.cache.map)
    if(cached !== undefined)
      console.log(cached.data.current)
    return cached !== undefined ? cached : null
  })

  if (isLoading) 
    return <Loader/>
  else if(forecast === null)
    return null
  let weatherComponent;

  switch (currentTab) {
    case TabsNames.CURRENT:
      weatherComponent = <CurrentWeather  data={forecast.data.current}/>;
      break;
    case TabsNames.DAILY:
      weatherComponent = <DailyForecast />;
      break;
    case TabsNames.HOURLY:
      weatherComponent = <HourlyForecast data={forecast.data.forecast.forecastday[0].hour}/>;
      break;
    default:
      weatherComponent = null;
  }

  return (
    <div>
      <CityNameContainer>
        <CityNameText>{forecast.data.location.name} ({forecast.data.location.country})</CityNameText>
      </CityNameContainer>
      <CityNameContainer>
        <NormalText>The weather here is <NiceLevelText>{forecast.niceLevel}</NiceLevelText></NormalText>
      </CityNameContainer>
      {weatherComponent}
    </div>
  );
}

export default WeatherDisplay;