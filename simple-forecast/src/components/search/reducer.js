import { createSlice } from "@reduxjs/toolkit"

const SEARCH_NAME = "search"
const CHANGE_ACTION = "changeSearch"
const AUTOCOMPLETE_ACTION = "autocompleteSave"
const LOADING_ACTION = "loadingSearch"
const FETCH_ACTION = "fetchSearch"
const READ_CACHE_ACTION = "readCache"
const CHECK_CACHE_ACTION = "checkCache"


export const SEARCH_CHANGE_ACTION = `${SEARCH_NAME}/${CHANGE_ACTION}`
export const SEARCH_AUTOCOMPLETE_ACTION = `${SEARCH_NAME}/${AUTOCOMPLETE_ACTION}`
export const SEARCH_LOADING_ACTION = `${SEARCH_NAME}/${LOADING_ACTION}`
export const SEARCH_FETCH_ACTION = `${SEARCH_NAME}/${FETCH_ACTION}`
export const SEARCH_READ_CACHE_ACTION = `${SEARCH_NAME}/${READ_CACHE_ACTION}`
export const SEARCH_CHECK_CACHE_ACTION = `${SEARCH_NAME}/${CHECK_CACHE_ACTION}`

const searchSlice = createSlice({
  name: SEARCH_NAME,
  initialState: {
    value: "",
    results: [],
    isLoading: false,
    cached: new Map(),
  },
  reducers: {
    [CHANGE_ACTION]: (state, action) => {
      state.value = action.payload
      state.isLoading = true
    },
    [AUTOCOMPLETE_ACTION]: (state, action) => {
      state.results = action.payload
      state.cached.set(state.value, action.payload)
    },
    [LOADING_ACTION]: (state, action) => {
      state.isLoading = action.payload
    },
    [FETCH_ACTION]: () => {},
    [READ_CACHE_ACTION]: (state, action) => {
      state.results = state.cached.get(action.payload)
    },
    [CHECK_CACHE_ACTION]: () => {},
  },
})

const searchReducer = searchSlice.reducer

export const { changeSearch, autocompleteSave, loadingSearch, fetchSearch, readCache, checkCache } = searchSlice.actions

export default searchReducer
