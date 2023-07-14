import React from "react"
import Button from "./Button"
import { locate } from "../weather/reducer"
import { useDispatch } from "react-redux"

const LocateButton = () => {
  const dispatch = useDispatch()
  const handleLocateClick = () => {
    dispatch(locate())
  }

  return <Button onClick={() => handleLocateClick()}>Use Location</Button>
}

export default LocateButton
