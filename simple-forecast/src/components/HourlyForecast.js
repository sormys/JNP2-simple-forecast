import React from 'react';
import styled from 'styled-components';

const HourlyForecastTable = styled.table`
  width: 60%;
  margin: 0 auto;
  border-collapse: collapse;
`;

const HourlyForecastTableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const HourlyForecastTableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${props => props.theme.background};
  }
`;

const HourlyForecastTableCell = styled.td`
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const HourlyForecastIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const HourlyForecastTableWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 200px;
  overflow-y: scroll;
`;

function HourlyForecast({ data }) {
  if (data === null) {
    return null;
  }

  const hourlyForecast = data.map((hour) => {
    const date = new Date(hour.time.replace(" ", "T"));
    const hourString = date.getHours() === 0 ? '00' : date.getHours().toString();
    const time = `${hourString}:${date.getMinutes().toString().padStart(2, '0')}`;
    const temperature = `${hour.temp_c}°C`;
    const iconUrl = `https:${hour.condition.icon}`;

    return { time, temperature, iconUrl };
  });

  return (
    <HourlyForecastTableWrapper>
      <HourlyForecastTable>
        <thead>
          <tr>
            <HourlyForecastTableHeader>Time</HourlyForecastTableHeader>
            <HourlyForecastTableHeader>Temperature</HourlyForecastTableHeader>
            <HourlyForecastTableHeader>Icon</HourlyForecastTableHeader>
          </tr>
        </thead>
        <tbody>
          {hourlyForecast.map((hour, index) => (
            <HourlyForecastTableRow key={index}>
              <HourlyForecastTableCell>{hour.time}</HourlyForecastTableCell>
              <HourlyForecastTableCell>{hour.temperature}</HourlyForecastTableCell>
              <HourlyForecastTableCell><HourlyForecastIcon src={hour.iconUrl} alt="Weather" /></HourlyForecastTableCell>
            </HourlyForecastTableRow>
          ))}
        </tbody>
      </HourlyForecastTable>
    </HourlyForecastTableWrapper>
  );
}

export default HourlyForecast;