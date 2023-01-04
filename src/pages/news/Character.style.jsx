import styled from "styled-components";

export const CardBody = styled.div`
  border: 2px solid black;
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 0.5rem;
`;
export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: flex-end; */
`;
export const CardRightButtom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardRightButtomRight = styled.div`
  gap: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ShareIcon = styled.i`
  cursor: pointer;
`;
