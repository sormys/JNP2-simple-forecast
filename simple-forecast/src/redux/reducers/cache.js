import { createSlice } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'

const CACHE_NAME = 'cache'
const UPDATE_ACTION = 'cacheUpdate'
const CHANGE_CURRNET_ACTION = 'changeCurrent'

export const CACHE_UPDATE_ACTION = `${CACHE_NAME}/${UPDATE_ACTION}`
export const CACHE_CHANGE_CURRENT_ACTION = `${CACHE_NAME}/${CHANGE_CURRNET_ACTION}`

enableMapSet()

export const makeKey = (city, country) => {
    return `${city} ${country}`
}

const cacheSlice = createSlice({
    name: CACHE_NAME,
    initialState: {
        map: new Map(),
        current: '',
        isLoading: false
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
                console.log("updating cache")
                state.map.set(makeKey(action.payload.data.location.name, action.payload.data.location.country), action.payload)
            }
        }
    }
});

const reducer = cacheSlice.reducer

export const { cacheUpdate, changeCurrent } = cacheSlice.actions

export default reducer