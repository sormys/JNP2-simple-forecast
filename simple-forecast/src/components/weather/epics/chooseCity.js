import { ofType } from "redux-observable"
import { map } from "rxjs/operators"
import { CACHE_CHANGE_CURRENT_ACTION, checkCache, loadingCache } from "../reducer"

export const chooseCityEpic = (action$) =>
  action$.pipe(
    ofType(CACHE_CHANGE_CURRENT_ACTION),
    map((action) => {
      if (action.payload === null)
        return loadingCache(false)
      else 
        return checkCache(action.payload)
    }),
  )

export default chooseCityEpic
