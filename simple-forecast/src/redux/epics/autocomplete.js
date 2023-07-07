import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { AUTOCOMPLETE_ASK_ACTION } from '../reducers/autocomplete'
import { SEARCH_CHANGE_ACTION } from '../reducers/search'
import { weatherAPIKey } from '../../config'
import { fillAutocomplete } from '../reducers/autocomplete'
import { Observable } from 'rxjs'

export const autocompleEpic = (action$) => action$.pipe(
    ofType(SEARCH_CHANGE_ACTION),
    mergeMap((action) => {
        if(action.payload === undefined || action.payload === null || action.payload === '')
            return new Observable(observer => {
                observer.next(fillAutocomplete(null))
                observer.complete()
            })
        
        let url = 
            `http://api.weatherapi.com/v1/search.json?key=${weatherAPIKey}&q=${action.payload}`
        return fetch(url)
            .then(response => 
                response.json())
            .then(data => {
                if (data.error !== undefined) {
                    return fillAutocomplete(null)
                } else {
                    return fillAutocomplete(data)
                }
            })
            .catch(error => {
                console.log(error)
                return fillAutocomplete(null)
            })
    })
)

export default autocompleEpic