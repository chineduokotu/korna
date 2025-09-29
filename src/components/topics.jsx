import styled from 'styled-components';

const TopicsWrapper = styled.section``;

const TopicList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TopicItem = styled.li`
  padding: 8px 16px;
  background: #f2f2f2;
  border-radius: 20px;
  font-size: 14px;
`;

function Topics() {
  const topics = [
    'Data Science', 'React', 'Coding', 'Mental Health', 'UX', 'Python', 'Productivity',
    'JavaScript', 'Web Development', 'Machine Learning', 'AI', 'Blockchain', 'Cybersecurity',
    'Design', 'Photography', 'Travel', 'Food', 'Health', 'Fitness', 'Finance', 'Business'
  ];
  return (
    <TopicsWrapper>
      <h3>Recommended topics</h3>
      <TopicList>
        {topics.map((topic, index) => <TopicItem key={index}>{topic}</TopicItem>)}
      </TopicList>
      <a href="#">See more topics</a>
    </TopicsWrapper>
  );
}

export default Topics;