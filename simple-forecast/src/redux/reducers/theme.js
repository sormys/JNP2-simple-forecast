import { createSlice } from '@reduxjs/toolkit'

const THEME_NAME = 'theme'
const SWITCH_ACTION = 'switchTheme'

export const THEME_CHANGE_ACTION = `${THEME_NAME}/${SWITCH_ACTION}`

const themeSlice = createSlice({
    name: THEME_NAME,
    initialState: {
        isLight: true
    },
    reducers: {
        [SWITCH_ACTION]: (state) => {
            state.isLight = !state.isLight
        }
    }
});

const reducer = themeSlice.reducer

export const { switchTheme } = themeSlice.actions

export default reducer