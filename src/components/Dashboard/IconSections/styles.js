import styled from "styled-components";

export const TopCardSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 10px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;

  div {
    display: flex;
  }

  &:hover {
    color: #3540ff;
    background-color: #f3f5fc;

    path {
      fill: #3540ff;
    }
  }
`;

export const Heart = styled.div`
  display: flex;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
  }

  &:active {
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
