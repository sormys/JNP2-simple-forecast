import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import { weatherAPIKey } from "../../../config"
import { CACHE_USE_LOCATION_ACTION, changeCurrent } from "../reducer"

export const localWeatherEpic = (action$) =>
  action$.pipe(
    ofType(CACHE_USE_LOCATION_ACTION),
    mergeMap((action) => {
      const location = `${action.payload.latitude},${action.payload.longitude}`
      let url = `http://api.weatherapi.com/v1/search.json?key=${weatherAPIKey}&q=${location}`
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.error !== undefined || data.length < 1) {
            console.log(data)
            return changeCurrent(null)
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
          return changeCurrent(null)
        })
    }),
  )

export default localWeatherEpic
