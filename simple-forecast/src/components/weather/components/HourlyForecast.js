import React from "react"
import { HourlyForecastContainer, HourlyForecastIcon, HourlyForecastListItem, HourlyForecastTemperature, HourlyForecastTime } from "./WeatherData"

export const HourlyForecast = ({ data }) => {
  if (data === null) return null

  const hourlyForecast = data.map((hour) => {
    const date = new Date(hour.time.replace(" ", "T"))
    const hourString = date.getHours() === 0 ? "00" : date.getHours().toString()
    const time = `${hourString}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`
    const temperature = `${hour.temp_c}°C`
    const iconUrl = `https:${hour.condition.icon}`

    return { time, temperature, iconUrl }
  })

  return (
    <HourlyForecastContainer>
      {hourlyForecast.map((hour, index) => (
        <HourlyForecastListItem key={index}>
          <HourlyForecastTime>{hour.time}</HourlyForecastTime>
          <HourlyForecastTemperature>
            {hour.temperature}
          </HourlyForecastTemperature>
          <HourlyForecastIcon src={hour.iconUrl} alt="Weather" />
        </HourlyForecastListItem>
      ))}
    </HourlyForecastContainer>
  )
}

