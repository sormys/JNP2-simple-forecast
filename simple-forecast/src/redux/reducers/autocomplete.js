import { createSlice } from '@reduxjs/toolkit'

const AUTOCOMPLETE_NAME = 'autocomplete'
const FILL_ACTION = 'fillAutocomplete'

export const AUTOCOMPLETE_FILL_ACTION = `${AUTOCOMPLETE_NAME}/${FILL_ACTION}`

const autocompleteSlice = createSlice({
    name: AUTOCOMPLETE_NAME,
    initialState: {
        results: []
    },
    reducers: {
        [FILL_ACTION]: (state, action) => {
            if (action.payload === null)
                state.results = []
            else
                state.results = action.payload
        }
    }
});

const reducer = autocompleteSlice.reducer

export const { fillAutocomplete } = autocompleteSlice.actions

export default reducer