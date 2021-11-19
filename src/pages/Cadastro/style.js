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
  }

  button {
    width: 348px;
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
    :hover {
      background-color: var(--lightpurple);
    }
  }
`;
