import { NiceLevel } from "../components/weather/const"

const isNotRainy = (weather) => {
  let isNotRainy = weather.current.condition.text.includes("rain") ? 0 : 1
  weather.forecast.forecastday.forEach((day) => {
    if (day.day.daily_will_it_rain === 1) {
      isNotRainy = 0
    }
  })
  return isNotRainy
}

const isAverageTempNice = (weather) => {
  const averageTemp = weather.forecast.forecastday[0].day.avgtemp_c
  return averageTemp > 18 && averageTemp < 25 ? 1 : 0
}

const allwaysMiddle = (weather) => {
  let allwaysMiddle =
    weather.current.temp_c > 15 && weather.current.temp_c < 30 ? 1 : 0
  weather.forecast.forecastday.forEach((day) => {
    if (day.day.maxtemp_c > 30 || day.day.mintemp_c < 15) allwaysMiddle = 0
  })
  return allwaysMiddle
}

export const checkWeatherStatus = (weather) => {
  const niceLevel =
    isNotRainy(weather) + isAverageTempNice(weather) + allwaysMiddle(weather)
  switch (niceLevel) {
    case 3:
      return NiceLevel.NICE
    case 2:
      return NiceLevel.PASSABLE
    default:
      return NiceLevel.NOT_NICE
  }
}
