import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { LoaderContainer } from "../LoaderContainer"
import { StyledLineWave } from "./StyledLineWave"

export const LineLoader = () => {
  const theme = useContext(ThemeContext)

  return (
    <LoaderContainer>
      <StyledLineWave color={theme.primary} />
    </LoaderContainer>
  )
}
