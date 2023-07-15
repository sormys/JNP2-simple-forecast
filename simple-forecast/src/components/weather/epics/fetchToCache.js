import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import { weatherAPIKey } from "../../../config"
import { CACHE_CHECK_ACTION, loadingCache } from "../reducer"
import { cacheUpdate } from "../reducer"

export const fetchToCacheEpic = (action$) =>
  action$.pipe(
    ofType(CACHE_CHECK_ACTION),
    mergeMap((action) => {
      let url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${action.payload.city} ${action.payload.country}&days=3&aqi=no&alerts=no`
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.error !== undefined) return loadingCache(false)
          else return cacheUpdate({ data, timeStamp: Date.now() })
        })
        .catch((error) => {
          console.log(error)
          return loadingCache(false)
        })
    }),
  )

export default fetchToCacheEpic
