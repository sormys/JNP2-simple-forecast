import { createSlice } from "@reduxjs/toolkit"

const GIFS_NAME = "gif"
const FETCH_ACTION = "fetchGifs"
const CHANGE_CURRNET_ACTION = "changeCurrentGif"
const CHANGE_DESCRIPTION_ACTION = "changeDescription"

export const GIFS_FETCH_ACTION = `${GIFS_NAME}/${FETCH_ACTION}`
export const GIFS_CHANGE_CURRENT_ACTION = `${GIFS_NAME}/${CHANGE_CURRNET_ACTION}`
export const GIFS_CHANGE_DESCRIPTION_ACTION = `${GIFS_NAME}/${CHANGE_DESCRIPTION_ACTION}`

const gifsSlice = createSlice({
  name: GIFS_NAME,
  initialState: {
    current: "",
    description: null,
    next: 0,
  },
  reducers: {
    [FETCH_ACTION]: (state, action) => {
      if (action.payload === null) {
        return
      }
      state.current = action.payload.results[0].media_formats.tinymp4.url
      state.next = action.payload.next
    },
    [CHANGE_DESCRIPTION_ACTION]: (state, action) => {
      if (action.payload === null) {
        return
      }
      state.description = action.payload
      state.next = 0
    },
  },
})

const reducer = gifsSlice.reducer

export const { fetchGifs, changeCurrentGif, changeDescription } =
  gifsSlice.actions

export default reducer
