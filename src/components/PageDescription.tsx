import styled from '@emotion/styled';

const StyledPageDescription = styled.p`
  font-size: 16px;
  line-height: 1.5rem;
  color: #333333;

  margin-bottom: 43px;
`;

export const PageDescription = () => (
  <StyledPageDescription>
    If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!
  </StyledPageDescription>
);