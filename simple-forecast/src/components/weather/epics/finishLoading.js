import { ofType } from "redux-observable"
import { map } from "rxjs/operators"
import {
  CACHE_LOAD_ACTION,
  CACHE_UPDATE_ACTION,
  loadingCache,
} from "../reducer"

export const finishLoadingEpic = (action$) =>
  action$.pipe(
    ofType(CACHE_UPDATE_ACTION, CACHE_LOAD_ACTION),
    map(() => loadingCache(false)),
  )

export default finishLoadingEpic
