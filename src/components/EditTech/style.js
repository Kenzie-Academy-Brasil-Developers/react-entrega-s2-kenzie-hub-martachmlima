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
    width: 80%;
  }

  section {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    span {
      :hover {
        color: var(--purple);
        font-weight: bold;
      }
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    button {
      width: 47%;
      padding: 0;
    }
  }
  div {
    display: flex;
    span {
      width: fit-content;
      height: 40px;
      border-radius: 8px;
      padding: 4px 10px;
      font-size: 14px;
      line-height: 28px;
      background: none;
      color: var(--purple);
      :hover {
        background-color: var(--lightpurple);
        cursor: pointer;
      }
    }
  }
`;
