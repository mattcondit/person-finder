import styled from '@emotion/styled';
import logo from '../assets/logo.svg';

const LOGO_WIDTH = 60;
const LOGO_HEIGHT = 24;

const StyledHeader = styled.header`
  margin-top: 20px;
  margin-bottom: 104px;
`;

export const Header = () => (
  <StyledHeader>
    <img
      src={logo}
      className="AppLogo"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      alt="logo"
    />
  </StyledHeader>
);