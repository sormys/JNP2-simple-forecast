import { createSlice } from "@reduxjs/toolkit"
import { enableMapSet } from "immer"

enableMapSet()

const CACHE_NAME = "cache"
const UPDATE_ACTION = "cacheUpdate"
const CHANGE_CURRNET_ACTION = "changeCurrent"
const LOCATE_ACTION = "locate"
const CHECK_NICE_ACTION = "checkNice"
const LOAD_ACTION = "load"

export const CACHE_UPDATE_ACTION = `${CACHE_NAME}/${UPDATE_ACTION}`
export const CACHE_CHANGE_CURRENT_ACTION = `${CACHE_NAME}/${CHANGE_CURRNET_ACTION}`
export const CACHE_USE_LOCATION_ACTION = `${CACHE_NAME}/${LOCATE_ACTION}`
export const CACHE_CHECK_NICE_ACTION = `${CACHE_NAME}/${CHECK_NICE_ACTION}`
export const CACHE_LOAD_ACTION = `${CACHE_NAME}/${LOAD_ACTION}`

export const NiceLevel = {
  NICE: "nice",
  PASSABLE: "passable",
  NOT_NICE: "not nice",
}

export const makeKey = (city, country) => {
  return `${city} ${country}`
}

const isNotRainy = (weather) => {
  let isNotRainy = weather.current.condition.text.includes("rain") ? 0 : 1
  weather.forecast.forecastday.forEach((day) => {
    if (day.day.condition.text.includes("rain")) {
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

const cacheSlice = createSlice({
  name: CACHE_NAME,
  initialState: {
    map: new Map(),
    current: "",
    isLoading: false,
  },
  reducers: {
    [CHANGE_CURRNET_ACTION]: (state, action) => {
      if (action.payload === null) {
        return
      }
      state.isLoading = true
      state.current = makeKey(action.payload.city, action.payload.country)
    },
    [UPDATE_ACTION]: (state, action) => {
      state.isLoading = false
      if (action.payload === null) {
        return
      } else {
        state.map.set(
          makeKey(
            action.payload.data.location.name,
            action.payload.data.location.country,
          ),
          action.payload,
        )
        state.current = makeKey(
          action.payload.data.location.name,
          action.payload.data.location.country,
        )
      }
    },
    [LOAD_ACTION]: (state, action) => {
      state.isLoading = false
    },
    [LOCATE_ACTION]: (state) => {
      state.isLoading = true
    },
    [CHECK_NICE_ACTION]: (state) => {
      if (state.current === "") return
      const weather = state.map.get(state.current)
      if (weather === undefined || weather === null) return
      const niceCriteria =
        isNotRainy(weather.data) +
        isAverageTempNice(weather.data) +
        allwaysMiddle(weather.data)
      weather.niceLevel =
        niceCriteria > 2
          ? NiceLevel.NICE
          : niceCriteria > 1
          ? NiceLevel.PASSABLE
          : NiceLevel.NOT_NICE
    },
  },
})

const reducer = cacheSlice.reducer

export const { cacheUpdate, changeCurrent, locate, checkNice, load } =
  cacheSlice.actions

export default reducer
