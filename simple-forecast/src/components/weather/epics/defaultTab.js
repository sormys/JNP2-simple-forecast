import { ofType } from "redux-observable"
import { CACHE_CHANGE_CURRENT_ACTION } from "../reducer"
import { changeTab } from "../../tabBar/reducer"
import { TabsNames } from "../../tabBar/const"
import { map } from "rxjs/operators"

export const defaultTabEpic = (action$) =>
  action$.pipe(
    ofType(CACHE_CHANGE_CURRENT_ACTION),
    map(() => changeTab(TabsNames.CURRENT)),
  )

export default defaultTabEpic
