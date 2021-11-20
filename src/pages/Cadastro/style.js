import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
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

  p {
    margin-bottom: 10px;
    color: var(--grey50);
  }

  select {
    color: var(--grey100);
    background-color: var(--grey0);
    border-radius: 5px;
    height: 60px;
    width: 348px;
    color: var(--grey50);
    border: none;
  }

  button {
    width: 348px;
  }

  span {
    color: var(--red);
    background-color: var(--white);
    font-size: 12px;
    margin-bottom: 10px;
  }
`;
