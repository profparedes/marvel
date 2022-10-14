import { memo } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MarvelLogo from 'assets/MarvelLogo.png';

import { ImgContainer, MenuContainer } from './style';

const Header: React.FC = () => {
  return (
    <div>
      <ImgContainer>
        <img src={MarvelLogo} alt="Marvel Logo" />
      </ImgContainer>
      <MenuContainer>
        <Container className="d-flex justify-content-center align-items-center">
          <ul>
            <li>
              <Link className="text-decoration-none text-light" to="/">
                Characters
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light" to="/comics">
                Comics
              </Link>
            </li>
          </ul>
        </Container>
      </MenuContainer>
    </div>
  );
};

export default memo(Header);
