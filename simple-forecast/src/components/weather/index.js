import React from "react"
import { useSelector } from "react-redux"
import { 
  CurrentWeather, 
  DailyForecast, 
  HourlyForecast, 
  NormalText, 
  CityNameText, 
  NiceStatusText, 
  LabelsContainer,
  WeatherTabContainer,
} from "./components"
import Loader from "../loader"
import { TabsNames } from "../tabBar/reducer"

const WeatherDisplay = () => {
  const currentTab = useSelector((state) => state.tabs.current)
  const isLoading = useSelector((state) => state.cache.isLoading)
  const forecast = useSelector((state) => {
    const cached = state.cache.map.get(state.cache.current)
    return cached !== undefined ? cached : null
  })

  if (isLoading) return <Loader />
  else if (forecast === null) return null
  let weatherComponent

  switch (currentTab) {
    case TabsNames.CURRENT:
      weatherComponent = <CurrentWeather data={forecast.data.current} />
      break
    case TabsNames.DAILY:
      weatherComponent = <DailyForecast />
      break
    case TabsNames.HOURLY:
      weatherComponent = 
        <HourlyForecast data={forecast.data.forecast.forecastday[0].hour} />
      break
    default:
      weatherComponent = null
  }

  return (
    <WeatherTabContainer>
      <LabelsContainer>
        <CityNameText>
          {forecast.data.location.name} ({forecast.data.location.country})
        </CityNameText>
      </LabelsContainer>
      <LabelsContainer>
        <NormalText>
          The weather here is{" "}
          <NiceStatusText>{forecast.niceLevel}</NiceStatusText>
        </NormalText>
      </LabelsContainer>
      {weatherComponent}
    </WeatherTabContainer>
  )
}

export default WeatherDisplay