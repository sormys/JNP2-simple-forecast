import { createSlice } from "@reduxjs/toolkit"

const GIFS_NAME = "gifs"
const UPDATE_GIF_ACTION = "updateGif"
const CHANGE_CURRNET_ACTION = "changeCurrentGif"
const CHANGE_DESCRIPTION_ACTION = "changeDescription"
const FETCH_GIF_ACTION = "fetchGif"

export const GIFS_UPDATE_GIF_ACTION = `${GIFS_NAME}/${UPDATE_GIF_ACTION}`
export const GIFS_CHANGE_CURRENT_ACTION = `${GIFS_NAME}/${CHANGE_CURRNET_ACTION}`
export const GIFS_CHANGE_DESCRIPTION_ACTION = `${GIFS_NAME}/${CHANGE_DESCRIPTION_ACTION}`
export const GIFS_FETCH_GIF_ACTION = `${GIFS_NAME}/${FETCH_GIF_ACTION}`

const gifsSlice = createSlice({
  name: GIFS_NAME,
  initialState: {
    current: "",
    description: null,
    next: 0,
  },
  reducers: {
    [UPDATE_GIF_ACTION]: (state, action) => {
      if (action.payload === null) return
      state.current = action.payload.results[0].media_formats.tinymp4.url
      state.next = action.payload.next === "0" ? 0 : action.payload.next
    },
    [CHANGE_DESCRIPTION_ACTION]: (state, action) => {
      if (action.payload === null) return
      state.description = action.payload
      state.next = 0
    },
    [FETCH_GIF_ACTION]: () => {},
  },
})

const reducer = gifsSlice.reducer

export const { updateGif, changeCurrentGif, changeDescription, fetchGif } =
  gifsSlice.actions

export default reducer
