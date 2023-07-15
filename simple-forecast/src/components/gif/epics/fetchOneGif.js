import { ofType } from "redux-observable"
import { mergeMap } from "rxjs/operators"
import { GIFS_FETCH_GIF_ACTION, updateGif } from "../reducer"
import { gifsAPIKey } from "../../../config"

export const fetchOneGifEpic = (action$, state$) =>
  action$.pipe(
    ofType(GIFS_FETCH_GIF_ACTION),
    mergeMap(() => {
        const query = state$.value.gifs.description
        let url = `https://tenor.googleapis.com/v2/search?key=${gifsAPIKey}&q=${query}&limit=1`
        if (state$.value.gifs.next !== 0)
          url += `&pos=${state$.value.gifs.next}`
        return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (data.error !== undefined || data.results.length < 1) {
              console.log(data)
              return updateGif(null)
            } else {
              return updateGif(data)
            }
          })
          .catch((error) => {
            console.log(error)
            return updateGif(null)
          })
    
    }),
  )

export default fetchOneGifEpic
