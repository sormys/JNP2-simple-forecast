import React from "react"
import { Button } from "../buttons"
import { useDispatch } from "react-redux"
import { switchTheme } from "./reducer"

function ChangeThemeButton() {
  const dispatch = useDispatch()

  return <Button onClick={() => dispatch(switchTheme())}>Change Theme</Button>
}

export default ChangeThemeButton
