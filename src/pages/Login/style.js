import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  span {
    background-color: var(--purple);
    color: var(--white);
    font-size: 22px;
    border-radius: 5px;
    padding: 2px;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  width: 80vw;
  max-width: 386px;
  border-radius: 5px;
  border: solid 2px var(--grey0);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 20px;

  div {
    width: 250px;
  }

  input {
    width: 250px;
  }

  p {
    margin-bottom: 10px;
    color: var(--red);
  }

  section {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  button {
    width: 250px;
  }

  span {
    width: 63px;
    height: 40px;
    border-radius: 8px;
    padding: 4px 10px;
    font-size: 14px;
    line-height: 28px;
    background: none;
    color: var(--purple);
  }
`;
