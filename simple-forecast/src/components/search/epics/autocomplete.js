import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import { SEARCH_CHANGE_ACTION } from "../reducer"
import { weatherAPIKey } from "../../../config"
import { autocomplete } from "../reducer"
import { Observable } from "rxjs"

export const autocompleEpic = (action$, state$) =>
  action$.pipe(
    ofType(SEARCH_CHANGE_ACTION),
    mergeMap((action) => {
      if (
        action.payload === undefined ||
        action.payload === null ||
        action.payload === ""
      )
        return new Observable((observer) => {
          observer.next(autocomplete(null))
          observer.complete()
        })

      const cached = state$.value.search.cached.get(action.payload)
      if (cached !== undefined) {
        return new Observable((observer) => {
          observer.next(autocomplete(cached))
          observer.complete()
        })
      }

      let url = `http://api.weatherapi.com/v1/search.json?key=${weatherAPIKey}&q=${action.payload}`
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.error !== undefined) {
            return autocomplete(null)
          } else {
            return autocomplete(data)
          }
        })
        .catch((error) => {
          console.log(error)
          return autocomplete(null)
        })
    }),
  )

export default autocompleEpic
