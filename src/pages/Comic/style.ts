import styled from 'styled-components';

interface IImgCoverProps {
  coverImage: string;
}

export const ImgCover = styled.div<IImgCoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
  width: 100%;
`;

export const BackgroundBlur = styled.div`
  background: rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: center center;
  backdrop-filter: blur(4px);
`;
