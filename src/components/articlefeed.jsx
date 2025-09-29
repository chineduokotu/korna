import styled from 'styled-components';
import ArticleCard from './articlecard';

const FeedWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const dummyArticles = [
  {
    title: 'How Knowledge Of Languages Is More Valuable Than Ever on the Job Market',
    subtitle: "It's not a skill issue, but a marketing issue",
    author: 'Language Lab by Benden',
    date: '5d ago',
    views: '1.2K',
    comments: '45',
    image: 'profile.jpg',
  },
  {
    title: 'The Rise of Artificial Intelligence in Everyday Life',
    subtitle: 'Exploring how AI is transforming our daily routines',
    author: 'Tech Insights',
    date: '2d ago',
    views: '2.5K',
    comments: '78',
    image: 'profile.jpg',
  },
  {
    title: 'Sustainable Living: Tips for a Greener Future',
    subtitle: 'Simple changes that can make a big impact',
    author: 'Eco Warrior',
    date: '1d ago',
    views: '890',
    comments: '23',
    image: 'profile.jpg',
  },
  {
    title: 'Mastering React: Advanced Patterns and Best Practices',
    subtitle: 'Deep dive into modern React development',
    author: 'Code Master',
    date: '3d ago',
    views: '3.1K',
    comments: '92',
    image: 'profile.jpg',
  },
  {
    title: 'The Psychology of Productivity',
    subtitle: 'Understanding what drives our work habits',
    author: 'Mind Matters',
    date: '4d ago',
    views: '1.8K',
    comments: '56',
    image: 'profile.jpg',
  },
];

function ArticleFeed() {
  return (
    <FeedWrapper>
      {dummyArticles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </FeedWrapper>
  );
}

export default ArticleFeed;