import styled from "styled-components"
import { TabItem } from "./TabItem"

export const ActiveTabItem = styled(TabItem)`
  color: ${(props) => props.theme.foreground};
  font-weight: bold;
  background-color: ${(props) => props.theme.tabActiveBackground};
  box-shadow: 0 0 0.25rem ${(props) => props.theme.tabActiveShadow};
`
