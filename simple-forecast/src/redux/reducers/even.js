import { createSlice } from '@reduxjs/toolkit'

const EVEN_NAME = 'even'
const EVEN_ACTION = 'change'

export const EVEN_CHANGE_ACTION = `${EVEN_NAME}/${EVEN_ACTION}`

const evenSlice = createSlice({
    name: EVEN_NAME,
    initialState: {
        isEven: false
    },
    reducers: {
        [EVEN_ACTION]: (state, action) => {
            state.isEven = action.payload 
        },
    }
});

const reducer = evenSlice.reducer

export const { change } = evenSlice.actions

export default reducer