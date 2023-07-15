import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import {
  CACHE_LOCATE_ACTION,
  loadingCache,
  convertCoordinates,
} from "../reducer"

const getCoordinatesEpic = (action$) =>
  action$.pipe(
    ofType(CACHE_LOCATE_ACTION),
    mergeMap(() => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position)
          },
          (error) => {
            reject(error)
          },
        )
      })
        .then(({ coords: { latitude, longitude } }) =>
          convertCoordinates({ latitude, longitude }),
        )
        .catch((error) => {
          console.log(error)
          return loadingCache(false)
        })
    }),
  )

export default getCoordinatesEpic
