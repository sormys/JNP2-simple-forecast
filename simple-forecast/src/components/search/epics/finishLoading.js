import { ofType } from "redux-observable"
import { map } from "rxjs/operators"
import { SEARCH_AUTOCOMPLETE_ACTION, SEARCH_READ_CACHE_ACTION, loadingSearch } from "../reducer"

export const finishLoadingEpic = (action$) =>
  action$.pipe(
    ofType(SEARCH_AUTOCOMPLETE_ACTION, SEARCH_READ_CACHE_ACTION),
    map(() => loadingSearch(false)),
  )

export default finishLoadingEpic
