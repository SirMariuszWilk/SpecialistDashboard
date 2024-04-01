import styled from "styled-components";

export const Specialist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  display: flex;
  width: 100px;
  height: 100px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 19px;
  line-height: 26px;
  letter: -1%;
  padding: 24px 0 5px 0;
`;

export const Profession = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.2px;
  color: #a2a8c1;
`;

export const Initials = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  font-size: 24px;
  line-height: 33px;
  font-weight: 600;
`;
