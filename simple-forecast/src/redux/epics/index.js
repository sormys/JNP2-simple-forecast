import { combineEpics } from 'redux-observable'
import addEpic from './addEpic'
import autocompleteEpic from './autocomplete'
import chooseCityEpic from './chooseCity'
import defaultTabEpic from './defaultTab'
import localWeatherEpic from './localWeather'
import updateNiceEpic from './updateNice' 
import startGifsEpic from './startGifs'
import descriptionChangeEpic from './descriptionChange'

const rootEpic = combineEpics(
    addEpic,
    autocompleteEpic,
    chooseCityEpic,
    defaultTabEpic,
    localWeatherEpic,
    updateNiceEpic,
    startGifsEpic,
    descriptionChangeEpic
)

export default rootEpic