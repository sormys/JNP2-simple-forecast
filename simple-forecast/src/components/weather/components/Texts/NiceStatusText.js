import styled from "styled-components"
import { NormalText } from "./NormalText"

export const NiceStatusText = styled(NormalText)`
  color: ${(props) => props.theme.accent};
`
