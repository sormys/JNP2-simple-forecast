import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeTab } from "./reducer"
import { TabsNames } from "./const"
import { ActiveTabItem, TabItem, TabContainer } from "./components"

function Tabs() {
  const dispatch = useDispatch()
  const currentTab = useSelector((state) => state.tabs.current)

  const handleTabClick = (tabNumber) => {
    dispatch(changeTab(tabNumber))
  }

  const tabs = [
    { id: TabsNames.CURRENT, label: "Current" },
    { id: TabsNames.DAILY, label: "Daily" },
    { id: TabsNames.HOURLY, label: "Hourly" },
  ]

  return (
    <TabContainer>
      {tabs.map((tab) => {
        if (tab.id === currentTab) {
          return (
            <ActiveTabItem key={tab.id} onClick={() => handleTabClick(tab.id)}>
              {tab.label}
            </ActiveTabItem>
          )
        } else {
          return (
            <TabItem key={tab.id} onClick={() => handleTabClick(tab.id)}>
              {tab.label}
            </TabItem>
          )
        }
      })}
    </TabContainer>
  )
}

export default Tabs
