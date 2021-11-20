import styled from "styled-components";

export const PopContainer = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: var(--white);
  padding: 20px;
  color: var(--grey100);
  border-radius: 5px;
  button {
    width: 80%;
  }
`;

export const PopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    font-weight: bold;
  }

  span {
    :hover {
      color: var(--purple);
      font-weight: bold;
    }
    background-color: var(--white);
    font-size: 14px;
    color: var(--grey100);
    cursor: pointer;
  }
`;

export const PopContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    color: var(--grey50);
    margin-bottom: 20px;
  }

  span {
    color: var(--grey100);
    background-color: var(--white);
    margin-bottom: 20px;
    font-size: 11px;
  }
`;
