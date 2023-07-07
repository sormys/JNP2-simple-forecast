import { createSlice } from "@reduxjs/toolkit"

const SEARCH_NAME = "search"
const CHANGE_ACTION = "changeSearch"
const AUTOCOMPLETE_ACTION = "autocomplete"

export const SEARCH_CHANGE_ACTION = `${SEARCH_NAME}/${CHANGE_ACTION}`
export const SEARCH_AUTOCOMPLETE_ACTION = `${SEARCH_NAME}/${AUTOCOMPLETE_ACTION}`

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
      if (action.payload === null) state.results = []
      else {
        state.results = action.payload
        state.cached.set(state.value, action.payload)
      }
      state.isLoading = false

    }
  },
})

const searchReducer = searchSlice.reducer

export const { changeSearch, autocomplete } = searchSlice.actions

export default searchReducer

