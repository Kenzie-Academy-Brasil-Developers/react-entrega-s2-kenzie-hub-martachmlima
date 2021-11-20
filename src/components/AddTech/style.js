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

  select {
    color: var(--grey100);
    background-color: var(--grey0);
    border-radius: 5px;
    height: 60px;
    width: 80%;
    color: var(--grey50);
    border: none;
    margin: 10px 0;
  }

  button {
    width: 100%;
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
