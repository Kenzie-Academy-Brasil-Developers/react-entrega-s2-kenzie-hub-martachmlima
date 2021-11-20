import styled from "styled-components";

export const Container = styled.div`
  width: 348px;
  height: 60px;
  border-radius: 8px;
  padding: 0px 15px;
  background-color: var(--grey0);
  color: var(--grey50);
  font-size: 16px;
  margin: 10px;
  border: none;
  :hover {
    border: 2px solid var(--grey100);
  }

  input {
    background: transparent;
    width: 348px;
    height: 60px;
    border: none;
  }
`;
