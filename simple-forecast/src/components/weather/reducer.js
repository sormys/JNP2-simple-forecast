import { createSlice } from "@reduxjs/toolkit"
import { enableMapSet } from "immer"

enableMapSet()

const CACHE_NAME = "cache"
const UPDATE_ACTION = "cacheUpdate"
const CHANGE_CURRNET_ACTION = "changeCurrent"
const CHECK_ACTION = "checkCache"
const FETCH_ACTION = "fetchCache"
const LOCATE_ACTION = "locate"
const CONVERT_COORDINATES_ACTION = "convertCoordinates"
const LOAD_ACTION = "load"
const LOADING_ACTION = "loadingCache"

export const CACHE_UPDATE_ACTION = `${CACHE_NAME}/${UPDATE_ACTION}`
export const CACHE_CHANGE_CURRENT_ACTION = `${CACHE_NAME}/${CHANGE_CURRNET_ACTION}`
export const CACHE_LOCATE_ACTION = `${CACHE_NAME}/${LOCATE_ACTION}`
export const CACHE_LOAD_ACTION = `${CACHE_NAME}/${LOAD_ACTION}`
export const CACHE_LOADING_ACTION = `${CACHE_NAME}/${LOADING_ACTION}`
export const CACHE_CHECK_ACTION = `${CACHE_NAME}/${CHECK_ACTION}`
export const CACHE_FETCH_ACTION = `${CACHE_NAME}/${FETCH_ACTION}`
export const CACHE_CONVERT_COORDINATES_ACTION = `${CACHE_NAME}/${CONVERT_COORDINATES_ACTION}`

export const makeKey = (city, country) => {
  return `${city} ${country}`
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
    [LOAD_ACTION]: () => {},
    [LOCATE_ACTION]: (state) => {
      state.isLoading = true
    },
    [LOADING_ACTION]: (state, action) => {
      state.isLoading = action.payload
    },
    [CHECK_ACTION]: () => {},
    [FETCH_ACTION]: () => {},
    [CONVERT_COORDINATES_ACTION]: () => {},
  },
})

const reducer = cacheSlice.reducer

export const {
  cacheUpdate,
  changeCurrent,
  locate,
  load,
  loadingCache,
  fetchCache,
  checkCache,
  convertCoordinates,
} = cacheSlice.actions

export default reducer
