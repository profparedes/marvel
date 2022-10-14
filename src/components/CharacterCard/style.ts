import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  background-color: #000;
`;

export const Triangle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  border-style: solid;
  border-width: 0 0 14px 14px;
  border-color: transparent transparent #ffffff transparent;
`;
