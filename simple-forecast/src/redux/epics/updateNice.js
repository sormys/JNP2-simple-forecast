import { ofType } from 'redux-observable'
import { CACHE_UPDATE_ACTION, checkNice } from '../reducers/cache'
import { map } from 'rxjs/operators'

export const updateNiceEpic = (action$) => action$.pipe(
    ofType(CACHE_UPDATE_ACTION),
    map(() => {
        return checkNice()
    })
)

export default updateNiceEpic