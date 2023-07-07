import themeReducer from "../components/themeChange/reducer"
import searchReducer from "../components/search/reducer"
import cacheReducer from "../components/weather/reducer"
import tabsReducer from "../components/tabBar/reducer"
import gifsReducer from "../components/gif/reducer"

const rootReducer = {
  theme: themeReducer,
  search: searchReducer,
  cache: cacheReducer,
  tabs: tabsReducer,
  gifs: gifsReducer,
}

export default rootReducer
