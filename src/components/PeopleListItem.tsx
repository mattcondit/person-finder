import styled from '@emotion/styled';
import { FC, memo } from 'react';
import { Person } from '../types';

// TODO: improve performance by fetching "paginated" images
// (i.e. batches of images by N list items above/below the items in view)
// images should already be cached locally after initial fetch

const AVATAR_SIZE = 96;

const StyledListItem = styled.li`
  display: flex;
  margin-bottom: 24px;
  ${({ hide}: {hide: boolean}) => hide ? `display: none`: ``}
`;

const StyledAvatar = styled.div`
  flex: 0 0 ${AVATAR_SIZE}px;
  height: ${AVATAR_SIZE}px;
  background-color: #C4C4C4;
  border-radius: 2px;
`;

const StyledInfo = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  color: #333333;
`;

const StyledDescription = styled.div`
  font-size: 14px;
  line-height: 1.5rem;
  letter-spacing: -0.015rem;
  color: #666666;
`;

type AvatarProps = {
  altText: string;
  imgUrl: string;
}

const Avatar : FC<AvatarProps> = ({ altText, imgUrl }) => (
  <StyledAvatar>
    <img
      src={imgUrl}
      width={'100%'}
      height={'100%'}
      alt={altText}
    />
  </StyledAvatar>
);

type PersonInfoProps = {
  name: string;
  description: string;
}

const PersonInfo : FC<PersonInfoProps> = ({ name, description }) => (
  <StyledInfo>
    <StyledName>{name}</StyledName>
    <StyledDescription>{description}</StyledDescription>
  </StyledInfo>
);

type PeopleListItemProps = {
  person: Person,
  hide: boolean
};

export const PeopleListItem : FC<PeopleListItemProps> = memo(({ person, hide }) => (
  <StyledListItem hide={hide}>
    <Avatar altText={person.name} imgUrl={person.avatar} />
    <PersonInfo name={person.name} description={person.description} />
  </StyledListItem>
));
