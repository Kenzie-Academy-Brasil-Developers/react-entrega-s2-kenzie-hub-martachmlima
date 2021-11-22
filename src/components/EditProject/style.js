import styled from "styled-components";

export const Container = styled.form`
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
    width: 80%;
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

  section {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    span {
      :hover {
        color: var(--purple);
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    > button {
      width: 47%;
      padding: 0;
      font-size: 14px;
    }
  }
`;
