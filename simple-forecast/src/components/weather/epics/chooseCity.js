import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import { weatherAPIKey } from "../../../config"
import { CACHE_CHANGE_CURRENT_ACTION, load } from "../reducer"
import { makeKey, cacheUpdate } from "../reducer"
import { Observable } from "rxjs"

function isUpToDate(timeStamp) {
  const elapsed = Date.now() - timeStamp

  return elapsed < 15 * 60 * 1000 // 15 minutes in milliseconds
}

export const chooseCityEpic = (action$, state$) =>
  action$.pipe(
    ofType(CACHE_CHANGE_CURRENT_ACTION),
    mergeMap((action) => {
      let cached = undefined
      if (action.payload === null)
        return new Observable((observer) => {
          observer.next(cacheUpdate(null))
          observer.complete()
        })
      const key = makeKey(action.payload.city, action.payload.country)
      cached = state$.value.cache.map.get(key)
      if (cached !== undefined && isUpToDate(cached.timeStamp))
        return new Observable((observer) => {
          observer.next(load(true))
          observer.complete()
        })

      let url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${action.payload.city} ${action.payload.country}&days=3&aqi=no&alerts=no`
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.error !== undefined) {
            return cacheUpdate(null)
          } else {
            return cacheUpdate({ data, timeStamp: Date.now() })
          }
        })
        .catch((error) => {
          console.log(error)
          return cacheUpdate(null)
        })
    }),
  )

export default chooseCityEpic
