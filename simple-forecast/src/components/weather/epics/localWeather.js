import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import { weatherAPIKey } from "../../../config"
import {
  CACHE_CONVERT_COORDINATES_ACTION,
  changeCurrent,
  loadingCache,
} from "../reducer"

export const localWeatherEpic = (action$) =>
  action$.pipe(
    ofType(CACHE_CONVERT_COORDINATES_ACTION),
    mergeMap((action) => {
      const location = `${action.payload.latitude},${action.payload.longitude}`
      const url = `http://api.weatherapi.com/v1/search.json?key=${weatherAPIKey}&q=${location}`
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.error !== undefined || data.length < 1) {
            console.log(data)
            return loadingCache(false)
          } else {
            const city = data[0].name
            const country = data[0].country
            const current = {
              city,
              country,
            }
            return changeCurrent(current)
          }
        })
        .catch((error) => {
          console.log(error)
          return loadingCache(false)
        })
    }),
  )

export default localWeatherEpic
