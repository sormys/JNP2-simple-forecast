import { ofType } from 'redux-observable'
import { CACHE_CHANGE_CURRENT_ACTION } from '../reducers/cache'
import { changeTab, TabsNames } from '../reducers/tabs'
import { map } from 'rxjs/operators'

export const defaultTabEpic = (action$) => action$.pipe(
    ofType(CACHE_CHANGE_CURRENT_ACTION),
    map(() => {
        return changeTab(TabsNames.CURRENT)
    })
)

export default defaultTabEpic