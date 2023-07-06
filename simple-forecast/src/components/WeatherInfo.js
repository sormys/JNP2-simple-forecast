import React from 'react'
import styled from 'styled-components'

const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
  border-radius: 0.25rem;
  padding: 1rem;
`

const WeatherIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
`

const Temperature = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.foreground};
  margin-bottom: 0.5rem;
`

const Description = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.comment};
`

function WeatherInfo({ data }) {
  if (data === null) {
      return
  }
  console.log("WeatherInfo")
  console.log(data)
  const temperature = data.temp_c;
  const condition = data.condition.text;
  const icon = "https:" + data.condition.icon;

  return (
    <WeatherInfoContainer>
        <Temperature>{temperature}°C</Temperature>
        <Description>{condition}</Description>
        <WeatherIcon src={icon} alt="Weather icon" />
    </WeatherInfoContainer>
  );
}

export default WeatherInfo;