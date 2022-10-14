import styled from 'styled-components';

interface IImgCardProps {
  coverImage: string;
}

export const ImgCard = styled.div<IImgCardProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
  height: 240px;
  width: 178px;
  border-radius: 3px;
`;
