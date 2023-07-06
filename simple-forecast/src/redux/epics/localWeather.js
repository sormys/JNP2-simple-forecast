import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { weatherAPIKey } from '../../config'
import { CACHE_USE_LOCATION_ACTION, changeCurrent } from '../reducers/cache'

export const localWeatherEpic = (action$) => action$.pipe(
    ofType(CACHE_USE_LOCATION_ACTION),
    mergeMap((action) => {
        console.log('useLocationEpic')
        console.log(action.payload)
        console.log("location aquired B)")
        const location = `${action.payload.latitude},${action.payload.longitude}`
        let url = 
            `http://api.weatherapi.com/v1/search.json?key=${weatherAPIKey}&q=${location}`
        console.log(url)
        return fetch(url)
            .then(response => 
                response.json())
            .then(data => {
                if (data.error !== undefined || data.length < 1) {
                    console.log(data)
                    return changeCurrent(null)
                } else {
                    console.log (data[0])
                    const city = data[0].name
                    const country = data[0].country
                    const current = {
                        city,
                        country
                    }
                    console.log(current)
                    console.log("localWeatherEpic complete")
                    return changeCurrent(current)
                }
            })
            .catch(error => {
                console.log(error)
                return changeCurrent(null)
            })
    })
)

export default localWeatherEpic