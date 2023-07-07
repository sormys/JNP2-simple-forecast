import { createSlice } from '@reduxjs/toolkit'

const TAB_NAME = 'tabs'
const CHANGE_ACTION = 'changeTab'

export const TAB_CHANGE_ACTION = `${TAB_NAME}/${CHANGE_ACTION}`

export const TabsNames = {
    CURRENT: 'current',
    DAILY: 'daily',
    HOURLY: 'hourly',
    NONE: null
}

const tabsSlice = createSlice({
    name: TAB_NAME,
    initialState: {
        current: TabsNames.NONE
    },
    reducers: {
        [CHANGE_ACTION]: (state, action) => {
            state.current = action.payload
        }
    }
});

const reducer = tabsSlice.reducer

export const { changeTab } = tabsSlice.actions

export default reducer