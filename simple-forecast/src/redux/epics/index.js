import { combineEpics } from 'redux-observable'
import addEpic from './addEpic'
import autocompleteEpic from './autocomplete'

const rootEpic = combineEpics(
    addEpic,
    autocompleteEpic
)

export default rootEpic