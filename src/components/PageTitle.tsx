import styled from '@emotion/styled';

const StyledPageTitle = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 40px;
  line-height: 1.1rem;
  color: #102261;

  margin-bottom: 50px;
`;

export const PageTitle = () => (
  <StyledPageTitle>
    The Person Finder
  </StyledPageTitle>
);