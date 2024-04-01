import styled, { keyframes } from "styled-components";

export const SpecialistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: space-between;

  @media (max-width: 895px) {
    justify-content: center;
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #d2d8f1;
  border-radius: 50%;
  border-top-color: #3540ff;
  animation: spin 1s infinite;
  animation-name: ${spin};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
`;

export const NoResults = styled.div`
  color: #a2a8c1;
  font-size: 20px;
`;
