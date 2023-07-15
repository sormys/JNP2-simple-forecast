import { ofType } from "redux-observable"
import { map } from "rxjs/operators"
import { SEARCH_CHECK_CACHE_ACTION, fetchSearch, readCache } from "../reducer"

export const searchCacheEpic = (action$, state$) =>
  action$.pipe(
    ofType(SEARCH_CHECK_CACHE_ACTION),
    map((action) => {
      if (state$.value.search.cached.has(action.payload))
        return readCache(action.payload)
      else return fetchSearch(action.payload)
    }),
  )

export default searchCacheEpic
