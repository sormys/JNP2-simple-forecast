import { combineEpics } from 'redux-observable'
import addEpic from './addEpic'
import autocompleteEpic from './autocomplete'
import chooseCityEpic from './chooseCity'

const rootEpic = combineEpics(
    addEpic,
    autocompleteEpic,
    chooseCityEpic
)

export default rootEpic