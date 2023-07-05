import Number from './Number'
import DarkThemeProvider from './DarkThemeProvider'
import GlobalStyle from './GlobalStyle'
import SearchBar from './SearchBar'
import Autocomplete from './Autocomplete'
import { useSelector } from 'react-redux'
import WeatherInfo from './WeatherInfo'
import Loader from './Loader'

function App() {
  const forecast = useSelector(state => {
      console.log("current " + state.cache.current)
      const cached = state.cache.map.get(state.cache.current)
      console.log("cached "+ cached + " " + state.cache.current.city + " " + state.cache.current.country)
      console.log(state.cache.map)
      if(cached !== undefined)
        console.log(cached.data.current)
      return cached !== undefined ? cached.data.current : null
    }
    );
  const isLoading = useSelector(state => state.cache.isLoading)

  return (
    <DarkThemeProvider>
      <GlobalStyle />
      <SearchBar />
      <Autocomplete />
      {isLoading ? <Loader/> : <WeatherInfo data={forecast} />}
      <Number />
    </DarkThemeProvider>
  );
}

export default App;
