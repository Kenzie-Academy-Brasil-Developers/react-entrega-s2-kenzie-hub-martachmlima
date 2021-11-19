import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  position: absolute;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;

  div {
    width: 100%;
    margin: 10px 0;
  }
  input {
    width: 100%;
  }
  p {
    display: flex;
    justify-content: space-between;
    span {
      :hover {
        color: var(--purple);
        font-weight: bold;
      }
    }
  }
  button {
    width: 100%;
  }
`;
