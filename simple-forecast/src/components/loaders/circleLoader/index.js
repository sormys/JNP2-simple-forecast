import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { LoaderContainer } from "../LoaderContainer"
import { StyledCircles } from "./StyledCircles"

export const CircleLoader = () => {
  const theme = useContext(ThemeContext)

  return (
    <LoaderContainer>
      <StyledCircles color={theme.primary} />
    </LoaderContainer>
  )
}
