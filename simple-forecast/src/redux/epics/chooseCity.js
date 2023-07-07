import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { weatherAPIKey } from '../../config'
import { CACHE_CHANGE_CURRENT_ACTION, load } from '../reducers/cache'
import { makeKey, cacheUpdate } from '../reducers/cache'
import { Observable } from 'rxjs'


function isUpToDate(timeStamp) {
  const elapsed = Date.now() - timeStamp;

  return elapsed < 15 * 60 * 1000; // 15 minutes in milliseconds
}

export const chooseCityEpic = (action$, state$) => action$.pipe(
    ofType(CACHE_CHANGE_CURRENT_ACTION),
    mergeMap((action) => {
        console.log('chooseCityEpic')
        console.log(action.payload)
        let cached = undefined
        if(action.payload === null) 
            return new Observable(observer => {
                observer.next(cacheUpdate(null))
                observer.complete()
            })
        const key = makeKey(action.payload.city, action.payload.country)
        cached = state$.value.cache.map.get(key)
        if (cached !== undefined && isUpToDate(cached.timeStamp))
            return new Observable(observer => {
                observer.next(load(true))
                observer.complete()
            })

        let url = 
            `http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${action.payload.city} ${action.payload.country}&days=3&aqi=no&alerts=no`
        console.log(url)
        return fetch(url)
            .then(response => 
                response.json())
            .then(data => {
                console.log('received data:')
                console.log(data)
                if (data.error !== undefined) {
                    console.log(data)
                    return cacheUpdate(null)
                } else {
                    return cacheUpdate({data, timeStamp: Date.now()})
                }
            })
            .catch(error => {
                console.log(error)
                return cacheUpdate(null)
            })
    })
)

export default chooseCityEpic