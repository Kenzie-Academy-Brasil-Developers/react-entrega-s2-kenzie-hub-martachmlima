import styled from "styled-components";

export const Header = styled.header`
  height: fit-content;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;

  span {
    background-color: var(--purple);
    color: var(--white);
    font-size: 22px;
    border-radius: 5px;
    padding: 2px;
  }

  h1 {
    padding: 10px;
  }

  p {
    font-weight: 700;
    margin: 15px;
    font-size: 15px;
    color: var(--grey50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1000px) {
      margin: 20px;
      font-size: 20px;
    }
    > button {
      width: fit-content;
      height: fit-content;
      margin-top: 10px;
      padding: 2px;
      background-color: var(--lightpurple);
      color: var(--purple);
      font-weight: 300;
      font-size: 12px;
      @media (min-width: 1000px) {
        display: none;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Content = styled.div`
  padding: 20px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 20px;
  @media (min-width: 1000px) {
    width: 380px;
  }
  span {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 43px;
    height: 34px;
    font-size: 35px;
    padding: 0;
  }
`;

export const ProfileCard = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    div {
      border-radius: 5px;
      width: 350px;
      height: 104px;
      background-color: var(--purple);
      color: var(--white);
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > p {
        margin: 15px 0;
        font-weight: 700;
      }
    }

    section {
      margin-bottom: 30px;
      background-color: var(--lightpurple);
      border-radius: 5px;
      width: 80%;
      height: 65px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
      font-size: 14px;
      > aside {
        margin-left: 50px;
        > p {
          margin-bottom: 10px;
          color: var(--grey100);
        }
      }
      > section {
        position: relative;
        top: -90%;
        left: -40%;
        width: 50px;
        background-color: var(--purple);
      }
      > article {
        margin-bottom: 30px;
        border-radius: 5px;
        height: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        font-size: 14px;
        position: relative;
        top: -90%;
        left: -40%;
        width: 50px;
        background-color: var(--green);
        > svg {
          height: 40px;
          width: 40px;
          color: var(--white);
        }
      }
      > svg {
        height: 40px;
        width: 40px;
        color: var(--white);
      }
    }
    button {
      width: 300px;
      height: 60px;
      margin-bottom: 20px;
    }
  }
`;
