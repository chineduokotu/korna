import styled from 'styled-components';
import ArticleCard from './articlecard';

const PicksWrapper = styled.section`
  border-top: 2px solid #000;
  padding-top: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 15px;
`;

// Use smaller ArticleCard variants or props for compact view
function StaffPicks() {
  const staffPicks = [
    {
      title: 'In The Medium Handbook by Zulie @Medium',
      subtitle: 'How this brand strategist uses Medium to explore ideas...',
      author: 'Zulie Rane',
      date: '1w ago',
      views: '5K',
      comments: '120',
    },
    {
      title: 'The Art of Storytelling in Content Creation',
      subtitle: 'Crafting narratives that captivate audiences',
      author: 'Story Weaver',
      date: '3d ago',
      views: '1.5K',
      comments: '34',
    },
    {
      title: 'Building Communities in the Digital Age',
      subtitle: 'Strategies for fostering online engagement',
      author: 'Community Builder',
      date: '2d ago',
      views: '2.2K',
      comments: '67',
    },
  ];

  return (
    <PicksWrapper>
      <Title>Staff Picks</Title>
      {staffPicks.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </PicksWrapper>
  );
}

export default StaffPicks;