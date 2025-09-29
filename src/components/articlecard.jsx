import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import profileImage from '../images/normal.jpeg';

const CardWrapper = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const AuthorAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 120px;
    height: 90px;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

function ArticleCard({ title, subtitle, author, date, views, comments, image }) {
  return (
    <CardWrapper>
      <TextWrapper>
        <AuthorInfo>
          <AuthorAvatar src={profileImage} alt="Author" />
          {author} · {date}
        </AuthorInfo>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Stats>
          <FaStar /> · {views} · {comments}
        </Stats>
      </TextWrapper>
      {image && <Image src={profileImage} alt="Article thumbnail" />}
    </CardWrapper>
  );
}

export default ArticleCard;