import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/profile.jpg';

const Container = styled.div`
  border-top: 2px solid #000;
  padding-top: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 15px;
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserDetails = styled.div``;

const UserName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const UserBio = styled.div`
  font-size: 12px;
  color: #666;
`;

const FollowButton = styled.button`
  background: #000;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

function WhoToFollow() {
  const users = [
    { name: 'Tech Guru', bio: 'Sharing insights on technology' },
    { name: 'Design Maven', bio: 'Creative design tips and trends' },
    { name: 'Code Ninja', bio: 'Programming tutorials and hacks' },
    { name: 'Health Coach', bio: 'Wellness and fitness advice' },
  ];

  return (
    <Container>
      <Title>Who to follow</Title>
      {users.map((user, index) => (
        <UserCard key={index}>
          <UserInfo>
            <Avatar src={profileImage} alt={user.name} />
            <UserDetails>
              <UserName>{user.name}</UserName>
              <UserBio>{user.bio}</UserBio>
            </UserDetails>
          </UserInfo>
          <FollowButton>Follow</FollowButton>
        </UserCard>
      ))}
    </Container>
  );
}

export default WhoToFollow;