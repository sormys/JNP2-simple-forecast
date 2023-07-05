import { createSlice } from '@reduxjs/toolkit'

const COUNTER_NAME = 'counter'
const ADD_ACTION = 'add'
const REMOVE_ACTION = 'remove'

export const COUNTER_ADD_ACTION = `${COUNTER_NAME}/${ADD_ACTION}`
export const COUNTER_REMOVE_ACTION = `${COUNTER_NAME}/${REMOVE_ACTION}`

const counterSlice = createSlice({
    name: COUNTER_NAME,
    initialState: {
        value: 0
    },
    reducers: {
        [ADD_ACTION]: (state, action) => {
            state.value += action.payload
        },
        [REMOVE_ACTION]: (state, action) => {
            state.value -= action.payload
        }
    }
});

const reducer = counterSlice.reducer

export const { add, remove } = counterSlice.actions

export default reducer