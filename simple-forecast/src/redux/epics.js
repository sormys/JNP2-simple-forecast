import { combineEpics } from "redux-observable"
import autocompleteEpic from "../components/search/epics/autocomplete"
import chooseCityEpic from "../components/weather/epics/chooseCity"
import defaultTabEpic from "../components/weather/epics/defaultTab"
import localWeatherEpic from "../components/weather/epics/localWeather"
import updateNiceEpic from "../components/weather/epics/updateNice"
import startGifsEpic from "../components/gif/epics/startGifs"
import descriptionChangeEpic from "../components/weather/epics/descriptionChange"

const rootEpic = combineEpics(
  autocompleteEpic,
  chooseCityEpic,
  defaultTabEpic,
  localWeatherEpic,
  updateNiceEpic,
  startGifsEpic,
  descriptionChangeEpic,
)

export default rootEpic
