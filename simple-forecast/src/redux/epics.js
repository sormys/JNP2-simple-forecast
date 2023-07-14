import { combineEpics } from "redux-observable"
import autocompleteEpic from "../components/search/epics/autocomplete"
import fetchAutocompleteEpic from "../components/search/epics/fetchAutocomplete"
import searchFininshLoadingEpic from "../components/search/epics/finishLoading"
import searchCacheEpic from "../components/search/epics/searchCache"
import chooseCityEpic from "../components/weather/epics/chooseCity"
import defaultTabEpic from "../components/weather/epics/defaultTab"
import localWeatherEpic from "../components/weather/epics/localWeather"
import fetchToCacheEpic from "../components/weather/epics/fetchToCache"
import checkCachedEpic from "../components/weather/epics/checkCached"
import cacheFinishLoadingEpic from "../components/weather/epics/finishLoading"
import startGifsEpic from "../components/gif/epics/startGifs"
import fetchOneGifEpic from "../components/gif/epics/fetchOneGif"
import descriptionChangeEpic from "../components/weather/epics/descriptionChange"

const rootEpic = combineEpics(
  autocompleteEpic,
  fetchAutocompleteEpic,
  searchCacheEpic,
  searchFininshLoadingEpic,
  chooseCityEpic,
  defaultTabEpic,
  localWeatherEpic,
  fetchToCacheEpic,
  checkCachedEpic,
  cacheFinishLoadingEpic,
  startGifsEpic,
  descriptionChangeEpic,
  fetchOneGifEpic,
)

export default rootEpic
