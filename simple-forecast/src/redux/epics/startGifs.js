import { ofType } from 'redux-observable'
import { mergeMap, switchMap } from 'rxjs/operators'
import { GIFS_CHANGE_DESCRIPTION_ACTION, fetchGifs } from '../reducers/gifs'
import { interval, Observable, takeUntil, startWith } from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'
import { gifsAPIKey } from '../../config'


export const startGifsEpic = (action$, state$) => action$.pipe(
    ofType(GIFS_CHANGE_DESCRIPTION_ACTION),
    mergeMap((action) => {
        if(action.payload === null || action.payload === undefined || action.payload === '')
            return new Observable( observer => {
                observer.next(fetchGifs(null))
                observer.complete()
            })
        const interval$ = interval(30000).pipe(
                startWith(0),
                withLatestFrom(state$.pipe(startWith(0))),
                mergeMap(([_, state]) => {
                    let url = 
                        `https://tenor.googleapis.com/v2/search?key=${gifsAPIKey}&q=${action.payload}&limit=1`
                    if(state.gifs.next !== 0){
                        url += `&pos=${state.gifs.next}`
                    }
                    return fetch(url)
                        .then(response => 
                            response.json())
                        .then(data => {
                            if (data.error !== undefined  || data.results.length < 1) {
                                console.log(data)
                                return fetchGifs(null)
                            } else {
                                return fetchGifs(data)
                            }
                        })
                        .catch(error => {
                            console.log(error)
                            return fetchGifs(null)
                        })
                }),
                takeUntil(action$.pipe(ofType(GIFS_CHANGE_DESCRIPTION_ACTION)))
            );
        return interval$;             
    })
)
export default startGifsEpic