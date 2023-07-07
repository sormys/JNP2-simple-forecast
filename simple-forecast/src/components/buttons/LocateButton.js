import React from "react"
import Button from "./Button"
import { locate } from "../weather/reducer"
import { useDispatch } from "react-redux"

const LocateButton = () => {
  const dispatch = useDispatch()
  const handleLocateClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          dispatch(locate({ latitude, longitude }))
        },
        (error) => {
          console.error(error)
        },
      )
    } else {
      console.error("Geolocation is not supported by this browser.")
    }
  }

  return <Button onClick={() => handleLocateClick()}>Use Location</Button>
}

export default LocateButton
