import { ThemeProvider } from 'styled-components';
import { theme } from './theme'; // Import your theme
import styled from 'styled-components';
import Header from './components/header';
import Tabs from './components/tabs';
import ArticleFeed from './components/articlefeed';

import Sidebar from './components/siderbar';

const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr; // Stack on mobile
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
    <PageContainer>
      <Header />
      <Tabs />
      <MainLayout>
        <ArticleFeed />
        <RightContent>
         
          <Sidebar />
        </RightContent>
      </MainLayout>
    </PageContainer>
    </ThemeProvider>
  );
}

export default App;