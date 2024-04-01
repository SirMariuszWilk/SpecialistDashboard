import styled from "styled-components";

export const Ratings = styled.div`
  display: flex;
  gap: 42px;
  padding: 0px 33px;
  margin-top: 3px;
  border-top: 1px solid #f2f4f6;
  border-bottom: 1px solid #f2f4f6;
  height: 86px;
`;

export const UserRating = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const AverageRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AverageRatingValue = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 34px;
`;

export const AverageRatingCount = styled.div`
  color: #a2a8c1;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
`;

export const Star = styled.div`
  display: flex;
  cursor: pointer;

  div {
    display: flex;
  }

  svg {
    path {
      fill: ${({ selected }) => (selected ? "#00e3ee" : "#c5cdda")};
    }
  }
`;
