import styled from 'styled-components';
import StaffPicks from './staffpics';
import WhoToFollow from './whotofollow';
import ReadingList from './readinglist';
import Topics from './topics';

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function Sidebar() {
  return (
    <SidebarWrapper>
      <StaffPicks />
      <Topics />
      <WhoToFollow />
      <ReadingList />
    </SidebarWrapper>
  );
}

export default Sidebar;