import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import { SEARCH_FETCH_ACTION, loadingSearch } from "../reducer"
import { weatherAPIKey } from "../../../config"
import { autocompleteSave } from "../reducer"

export const fetchAutocompleteEpic = (action$) =>
  action$.pipe(
    ofType(SEARCH_FETCH_ACTION),
    mergeMap((action) => {
      let url = `http://api.weatherapi.com/v1/search.json?key=${weatherAPIKey}&q=${action.payload}`
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.error !== undefined) return loadingSearch(false)
          else return autocompleteSave(data)
        })
        .catch((error) => {
          console.log(error)
          return loadingSearch(false)
        })
    }),
  )

export default fetchAutocompleteEpic
