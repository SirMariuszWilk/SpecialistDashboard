import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 43px;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #3540ff;

    svg {
      path {
        fill: #3540ff;
      }
    }
  }
`;

export const Icon = styled.div`
  display: flex;

  div {
    display: flex;
  }
`;
