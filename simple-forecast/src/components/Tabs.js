import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeTab } from '../redux/reducers/tabs';
import { TabsNames } from '../redux/reducers/tabs';

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.selection};
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 100%;
`;

const TabItem = styled.div`
  flex: 1;
  font-size: 1.2rem;
  color: ${props => props.theme.comment};
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;
  background-color: ${props => props.theme.tabBackground};
  border-radius: 0.25rem;
  padding: 0.5rem;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${props => props.theme.foreground};
    background-color: ${props => props.theme.tabHoverBackground};
  }
`;

const ActiveTabItem = styled(TabItem)`
  color: ${props => props.theme.foreground};
  font-weight: bold;
  background-color: ${props => props.theme.tabActiveBackground};
  box-shadow: 0 0 0.25rem ${props => props.theme.tabActiveShadow};
`;


function Tabs() {
  const dispatch = useDispatch();
  const currentTab = useSelector(state => state.tabs.current);

  const handleTabClick = (tabNumber) => {
    console.log(`Tab ${tabNumber} clicked`);
    dispatch(changeTab(tabNumber));
  };

  const tabs = [
    { id: TabsNames.CURRENT, label: 'Current' },
    { id: TabsNames.DAILY, label: 'Daily' },
    { id: TabsNames.HOURLY, label: 'Hourly' },
  ];

  return (
    <TabContainer>
      {tabs.map(tab => {
        if (tab.id === currentTab) {
          return (
            <ActiveTabItem key={tab.id} onClick={() => handleTabClick(tab.id)}>
              {tab.label}
            </ActiveTabItem>
          );
        } else {
          return (
            <TabItem key={tab.id} onClick={() => handleTabClick(tab.id)}>
              {tab.label}
            </TabItem>
          );
        }
      })}
    </TabContainer>
  );
}

export default Tabs;