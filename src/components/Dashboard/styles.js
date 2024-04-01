import styled from "styled-components";
import device from "../device";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1385px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 64px;
  gap: 27px;
  min-height: calc(100vh - 64px - 40px);

  @media (max-width: ${device.laptop}) {
    padding-top: 0px;
  }
`;
