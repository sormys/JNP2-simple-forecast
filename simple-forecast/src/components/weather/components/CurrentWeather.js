import React from "react"
import Gif from "../../gif"
import { 
  DayWeatherContainer, 
  DayDescription, 
  DayTemperature, 
  DayWeatherData, 
  DayWeatherDataItem, 
  DayWeatherDataLabel,
  DayWeatherDataValue, 
  DayWeatherIcon 
} from "./WeatherData"



export const CurrentWeather = ({ data }) => {
  if (data === null) return null

  const temperature = data.temp_c
  const condition = data.condition.text
  const icon = "https:" + data.condition.icon

  const weatherData = [
    { label: "Last updated:", value: data.last_updated },
    { label: "Wind speed:", value: `${data.wind_kph} kph` },
    { label: "Wind direction:", value: data.wind_dir },
    { label: "Pressure:", value: `${data.pressure_mb} mb` },
    { label: "Humidity:", value: `${data.humidity}%` },
    { label: "Cloud cover:", value: `${data.cloud}%` },
    { label: "Feels like:", value: `${data.feelslike_c}°C` },
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
      <Gif />
    </DayWeatherContainer>
  )
}
