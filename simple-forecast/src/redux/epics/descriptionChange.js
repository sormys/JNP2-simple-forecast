import { ofType } from 'redux-observable'
import { CACHE_LOAD_ACTION, CACHE_UPDATE_ACTION } from '../reducers/cache'
import { map } from 'rxjs/operators'
import { changeDescription, fetchGifs } from '../reducers/gifs'

export const descriptionChangeEpic = (action$, state$) => action$.pipe(
    ofType(CACHE_UPDATE_ACTION, CACHE_LOAD_ACTION),
    map((action) => {
        if(action.payload === null)
            return fetchGifs(null) 
        const description = state$.value.cache.map.get(state$.value.cache.current).data.current.condition.text
        return changeDescription(description)
    })
)

export default descriptionChangeEpic