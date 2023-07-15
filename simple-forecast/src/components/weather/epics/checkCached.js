import { ofType } from "redux-observable"
import { map } from "rxjs/operators"
import { CACHE_CHECK_ACTION, fetchCache, load } from "../reducer"
import { makeKey } from "../reducer"

function isUpToDate(timeStamp) {
  const elapsed = Date.now() - timeStamp

  return elapsed < 15 * 60 * 1000 // 15 minutes in milliseconds
}

export const checkCachedEpic = (action$, state$) =>
  action$.pipe(
    ofType(CACHE_CHECK_ACTION),
    map((action) => {
      const key = makeKey(action.payload.city, action.payload.country)
      const cached = state$.value.cache.map.get(key)
      if (cached !== undefined && isUpToDate(cached.timeStamp)) return load()
      else return fetchCache(action.payload)
    }),
  )

export default checkCachedEpic
