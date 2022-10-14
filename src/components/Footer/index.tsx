import { memo } from 'react';

import { Container } from 'react-bootstrap';

import MarvelLogo from 'assets/MarvelLogo.png';

import { ImgContainer } from './style';

const Footer: React.FC = () => {
  return (
    <div>
      <ImgContainer className="py-5">
        <Container>
          <img src={MarvelLogo} alt="Marvel Logo" />
        </Container>
      </ImgContainer>
    </div>
  );
};

export default memo(Footer);
