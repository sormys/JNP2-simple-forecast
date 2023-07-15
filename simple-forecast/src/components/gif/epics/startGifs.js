import { ofType } from "redux-observable"
import { switchMap, map } from "rxjs/operators"
import { GIFS_CHANGE_DESCRIPTION_ACTION, fetchGif } from "../reducer"
import { interval, takeUntil, startWith } from "rxjs"

export const startGifsEpic = (action$) =>
  action$.pipe(
    ofType(GIFS_CHANGE_DESCRIPTION_ACTION),
    switchMap(() =>
      interval(30000).pipe(
        startWith(0),
        map(() => fetchGif()),
        takeUntil(action$.pipe(ofType(GIFS_CHANGE_DESCRIPTION_ACTION))),
      ),
    ),
  )
export default startGifsEpic
