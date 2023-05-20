import styled from "styled-components";

export const CardBody = styled.div`
  border: 5px solid #da9f52;
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #d8d8b0;
  width: 340px;
  height: 250px;
  align-items: center;
`;
export const Image = styled.div`
  /* align-items: center; */
`;

export const ImageContent = styled.img`
  border: 3px solid #926a36;
  border-radius: 50%;
  width: 150px;
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
