import React from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  border-bottom: ${props => props.active ? '2px solid #000' : 'none'};
  color: ${props => props.active ? '#000' : '#666'};

  &:hover {
    color: #000;
  }
`;

function Tabs() {
  return (
    <TabsContainer>
      <Tab active>For You</Tab>
      <Tab>Featured</Tab>
    </TabsContainer>
  );
}

export default Tabs;