import styled from "styled-components";
import device from "../../device";

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #f9fafe;
  padding-top: 24px;
  padding-bottom: 24px;
  align-items: center;

  @media (max-width: ${device.laptop}) {
    flex-direction: column;
    gap: 12px;
    padding-bottom: 14px;
  }

  @media (max-width: ${device.mobileL}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Switch = styled.div`
  display: flex;
  width: 400px;
  height: 50px;

  @media (max-width: ${device.laptop}) {
    max-width: 80vw;
    height: 40px;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;

  @media (max-width: 1300px) {
    position: static;
  }
`;

const SwitchButton = styled.button`
  display: flex;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? "600" : "400")};
  border-radius: 4px 0px 0px 4px;
  border: 1px solid ${({ selected }) => (selected ? "#3540FF" : "#e2e4ec")};
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#A2A8C1")};
  background-color: ${({ selected }) => (selected ? "#3540FF" : "#F9FAFE")};
  box-shadow: ${({ selected }) =>
    selected ? "0px 10px 16px 0px #cbd4fab2" : "none"};
  cursor: pointer;

  &:hover {
    color: ${({ selected }) => (selected ? "#FFFFFF" : "#3540FF")};
    background-color: ${({ selected }) => (selected ? "#3540FF" : "#F3F5FC")};
  }
`;

export const LeftButton = styled(SwitchButton)`
  border-radius: 4px 0px 0px 4px;
`;

export const RightButton = styled(SwitchButton)`
  border-radius: 0px 4px 4px 0px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  align-items: center;

  @media (max-width: ${device.laptopL}) {
    font-size: 24px;
  }

  @media (max-width: ${device.laptop}) {
    text-align: center;
  }

  @media (max-width: ${device.mobileL}) {
    font-size: 18px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  @media (max-width: ${device.laptop}) {
    margin-left: auto;
  }
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  height: 50px;
  font-size: 14px;
  line-height: 19px;
  padding: 15px 10px 15px 42px;
  gap: 10px;
  border: none;
  background-color: transparent;
  width: 104px;
  font-family: Open Sans;
  transition: width 0.2s ease-in-out;
  color: #0f1d38;

  &:focus {
    outline: none;
    box-shadow: 0px 3px 16px 0px #2211660d;
    background-color: white;
    width: 316px;
  }

  &::placeholder {
    font-size: 14px;
    color: #a2a8c1;
  }

  @media (max-width: ${device.mobileL}) {
    padding-top: 0px;
    padding-bottom: 0px;
    height: 40px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 12px;
  top: 15px;
  width: 20px;
  height: 20px;
  pointer-events: none;

  @media (max-width: ${device.mobileL}) {
    width: 16px;
    height: 16px;
    top: 12px;
    left: 16px;
  }
`;
