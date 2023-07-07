import { createSlice } from "@reduxjs/toolkit"
import { enableMapSet } from "immer"

enableMapSet()

const CACHE_NAME = "cache"
const UPDATE_ACTION = "cacheUpdate"
const CHANGE_CURRNET_ACTION = "changeCurrent"
const LOCATE_ACTION = "locate"
const LOAD_ACTION = "load"

export const CACHE_UPDATE_ACTION = `${CACHE_NAME}/${UPDATE_ACTION}`
export const CACHE_CHANGE_CURRENT_ACTION = `${CACHE_NAME}/${CHANGE_CURRNET_ACTION}`
export const CACHE_USE_LOCATION_ACTION = `${CACHE_NAME}/${LOCATE_ACTION}`
export const CACHE_LOAD_ACTION = `${CACHE_NAME}/${LOAD_ACTION}`

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
    [LOAD_ACTION]: (state) => {
      state.isLoading = false
    },
    [LOCATE_ACTION]: (state) => {
      state.isLoading = true
    },
  },
})

const reducer = cacheSlice.reducer

export const { cacheUpdate, changeCurrent, locate, load } = cacheSlice.actions

export default reducer
