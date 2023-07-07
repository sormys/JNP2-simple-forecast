import React from "react"
import {
  DayWeatherContainer,
  DayDescription,
  DayTemperature,
  DayWeatherData,
  DayWeatherDataItem,
  DayWeatherDataLabel,
  DayWeatherDataValue,
  DayWeatherIcon,
} from "./index"

export const DaySummaryWeather = ({ data }) => {
  if (data === null) return null

  const temperature = data.avgtemp_c
  const condition = data.condition.text
  const icon = "https:" + data.condition.icon

  const weatherData = [
    { label: "Max temperature:", value: `${data.maxtemp_c}°C` },
    { label: "Min temperature:", value: `${data.mintemp_c}°C` },
    { label: "Max wind speed:", value: `${data.maxwind_kph} kph` },
    { label: "Total precipitation:", value: `${data.totalprecip_mm} mm` },
    { label: "Total snow:", value: `${data.totalsnow_cm} cm` },
    { label: "Average visibility:", value: `${data.avgvis_km} km` },
    { label: "Average humidity:", value: `${data.avghumidity}%` },
    { label: "UV index:", value: data.uv },
  ]

  return (
    <DayWeatherContainer>
      <DayTemperature>{temperature}°C</DayTemperature>
      <DayDescription>{condition}</DayDescription>
      <DayWeatherIcon src={icon} alt="Weather icon" />
      <DayWeatherData>
        {weatherData.map((item, index) => (
          <DayWeatherDataItem key={index}>
            <DayWeatherDataLabel> {item.label}</DayWeatherDataLabel>
            <DayWeatherDataValue> {item.value}</DayWeatherDataValue>
          </DayWeatherDataItem>
        ))}
      </DayWeatherData>
    </DayWeatherContainer>
  )
}
