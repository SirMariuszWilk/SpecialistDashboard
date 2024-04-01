import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  width: 323px;
  height: 441px;
  padding-top: 13px;
  border: 1px solid transparent;
  box-shadow: 0px 3px 16px 0px #e7eaf759;

  &:hover {
    border: 1px solid #3540ff;
  }
`;

export const Contact = styled.div`
  display: flex;
  height: 43px;
  padding-top: 40px;
`;

export const BottomBar = styled.div`
  display: flex;
  gap: 1px;
  background-color: #f2f4f6;
  flex: 1;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
}
`;

export const BottomButton = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #a2a8c1;
  cursor: pointer;
  line-height: 16px;

  &:hover {
    background-color: #3540ff;
    color: white;
    font-weight: 600;
  }
`;
