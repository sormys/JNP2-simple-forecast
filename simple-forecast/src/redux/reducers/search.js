import { createSlice } from '@reduxjs/toolkit'

const SEARCH_NAME = 'search'
const CHANGE_ACTION = 'changeSearch'

export const SEARCH_CHANGE_ACTION = `${SEARCH_NAME}/${CHANGE_ACTION}`

const searchSlice = createSlice({
    name: SEARCH_NAME,
    initialState: {
        value: ''
    },
    reducers: {
        [CHANGE_ACTION]: (state, action) => {
            console.log("Change search")
            state.value = action.payload
            console.log(state.value)
        }
    }
});

const reducer = searchSlice.reducer

export const { changeSearch } = searchSlice.actions

export default reducer