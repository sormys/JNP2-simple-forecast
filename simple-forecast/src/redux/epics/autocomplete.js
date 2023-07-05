import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { AUTOCOMPLETE_ASK_ACTION } from '../reducers/autocomplete'
import { SEARCH_CHANGE_ACTION } from '../reducers/search'
import { weatherAPIKey } from '../../config'
import { fillAutocomplete } from '../reducers/autocomplete'

export const autocompleEpic = (action$) => action$.pipe(
    ofType(SEARCH_CHANGE_ACTION),
    mergeMap((action) => {
        let url = 
            `http://api.weatherapi.com/v1/search.json?key=${weatherAPIKey}&q=${action.payload}`
        console.log(url)
        return fetch(url)
            .then(response => 
                response.json())
            .then(data => {
                console.log('received data:')
                console.log(data)
                if (data.error !== undefined) {
                    console.log(data)
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