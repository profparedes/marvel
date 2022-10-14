import styled from 'styled-components';

interface IImgContainerProps {
  coverImage: string;
}

export const ImgContainer = styled.div<IImgContainerProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
  height: 600px;
  width: 100%;

  h2,
  p {
    text-shadow: 2px 2px 2px #000;
  }
`;
