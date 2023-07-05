import counterReducer from "./counter"
import evenReducer from "./even";
import themeReducer from "./theme";
import autocompleteReducer from "./autocomplete";
import searchReducer from "./search";
import cacheReducer from "./cache";

const rootReducer = {
    counter: counterReducer,
    even: evenReducer,
    theme: themeReducer,
    autocomplete: autocompleteReducer,
    search: searchReducer,
    cache: cacheReducer,
};

export default rootReducer