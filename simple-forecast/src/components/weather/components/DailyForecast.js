import React from "react"
import { useSelector } from "react-redux"
import { DaySummaryWeather, MultiDayWeatherContainer } from "./WeatherData"

export const DailyForecast = () => {
  const forecast = useSelector((state) => {
    const cached = state.cache.map.get(state.cache.current)
    return cached !== undefined ? cached.data : null
  })

  if (forecast === null) return null

  return (
    <MultiDayWeatherContainer>
      <DaySummaryWeather data={forecast.forecast.forecastday[0].day} />
      <DaySummaryWeather data={forecast.forecast.forecastday[1].day} />
      <DaySummaryWeather data={forecast.forecast.forecastday[2].day} />
    </MultiDayWeatherContainer>
  )
}

export default DailyForecast
