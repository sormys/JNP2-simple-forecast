import { combineEpics } from 'redux-observable'
import addEpic from './addEpic'
import autocompleteEpic from './autocomplete'
import chooseCityEpic from './chooseCity'
import defaultTabEpic from './defaultTab'
import localWeatherEpic from './localWeather'
import updateNiceEpic from './updateNice' 

const rootEpic = combineEpics(
    addEpic,
    autocompleteEpic,
    chooseCityEpic,
    defaultTabEpic,
    localWeatherEpic,
    updateNiceEpic
)

export default rootEpic