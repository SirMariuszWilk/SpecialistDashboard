import styled from "styled-components";
import device from "./device";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0 100px 0 100px;
  background-color: #f9fafe;
  font-family: Open Sans;

  @media (max-width: ${device.tablet}) {
    padding: 0 60px 0 60px;
  }

  @media (max-width: ${device.mobileL}) {
    padding: 0;
  }
`;
