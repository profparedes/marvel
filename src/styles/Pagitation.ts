import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;

  li {
    list-style: none;

    a {
      display: inline-block;
      border: solid 1px #ccc;
      padding: 10px 20px;
      border-radius: 5px;
      margin: 0 2px;
      color: inherit;
      text-decoration: none;
    }

    &.selected a {
      background-color: #f00;
      font-weight: bold;
      border: solid 1px #f00;
    }
  }
`;
