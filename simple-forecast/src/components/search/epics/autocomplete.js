import { ofType } from "redux-observable"
import { map } from "rxjs/operators"
import { SEARCH_CHANGE_ACTION, checkCache, loadingSearch } from "../reducer"

export const autocompleEpic = (action$) =>
  action$.pipe(
    ofType(SEARCH_CHANGE_ACTION),
    map((action) => {
      if (
        action.payload === undefined ||
        action.payload === null ||
        action.payload === ""
      )
        return loadingSearch(false)
      else 
        return checkCache(action.payload)
    }),
  )

export default autocompleEpic
