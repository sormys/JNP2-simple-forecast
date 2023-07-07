import themeReducer from "./theme";
import autocompleteReducer from "./autocomplete";
import searchReducer from "./search";
import cacheReducer from "./cache";
import tabsReducer from "./tabs";
import gifsReducer from "./gifs";

const rootReducer = {
    theme: themeReducer,
    autocomplete: autocompleteReducer,
    search: searchReducer,
    cache: cacheReducer,
    tabs: tabsReducer,
    gifs: gifsReducer
};

export default rootReducer