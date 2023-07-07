import { ofType } from 'redux-observable'
import { CACHE_LOAD_ACTION, CACHE_UPDATE_ACTION } from '../reducers/cache'
import { map } from 'rxjs/operators'
import { changeDescription } from '../reducers/gifs'

export const descriptionChangeEpic = (action$, state$) => action$.pipe(
    ofType(CACHE_UPDATE_ACTION, CACHE_LOAD_ACTION),
    map((action) => {
        if(action.payload === null)
            return changeDescription(null) 
        console.log(state$.value.cache.map.get(state$.value.cache.current).data.current)
        const description = state$.value.cache.map.get(state$.value.cache.current).data.current.condition.text
        console.log('descriptionChangeEpic')
        console.log(description)
        return changeDescription(description)
    })
)

export default descriptionChangeEpic