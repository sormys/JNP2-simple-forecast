import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { change } from '../reducers/even'
import { COUNTER_ADD_ACTION, COUNTER_REMOVE_ACTION } from '../reducers/counter'

export const addEpic = (action$, state$) => action$.pipe(
    ofType(COUNTER_ADD_ACTION, COUNTER_REMOVE_ACTION),
    mergeMap(() => {
        let url = 'https://api.isevenapi.xyz/api/iseven/'
        url += state$.value.counter.value 
        console.log(url)
        return fetch(url)
            .then(response => 
                response.json())
            .then(data => {
                console.log(data)
                return change(data.iseven)
            })
            .catch(error => {
                console.log(error)
                return change(state$.value.even.iseven)
            })
    })
)

export default addEpic