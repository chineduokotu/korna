import styled from 'styled-components';
import { FaHeart, FaBookOpen } from 'react-icons/fa';

const ReadingWrapper = styled.section`
  border-top: 2px solid #000;
  padding-top: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 15px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const BookIcon = styled(FaBookOpen)`
  color: #666;
  font-size: 14px;
`;

const ItemText = styled.span`
  font-size: 14px;
  color: #333;
`;

const Hint = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 10px;
`;

function ReadingList() {
  const readingItems = [
    'The Future of Web Development',
    'Understanding React Hooks',
    'Machine Learning Basics',
    'UI/UX Design Principles',
    'Blockchain Explained',
    'Cybersecurity Tips',
    'Productivity Hacks',
    'Healthy Eating Guide'
  ];

  return (
    <ReadingWrapper>
      <Title>Reading list</Title>
      {readingItems.map((item, index) => (
        <ListItem key={index}>
          <BookIcon />
          <ItemText>{item}</ItemText>
        </ListItem>
      ))}
      <Hint>Click the <FaHeart /> on any story to easily add it to your reading list or a custom list that you can share.</Hint>
    </ReadingWrapper>
  );
}

export default ReadingList;