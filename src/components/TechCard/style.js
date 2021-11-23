import styled from "styled-components";

export const ContainerTech = styled.div`
  height: 77px;
  display: flex;
  margin: 15px 0;

  section {
    height: 77px;
    width: 71px;
    background-color: var(--lightgreen);
    border-radius: 5px;
    margin-left: 20px;
    :hover {
      background-color: var(--green);
      > svg {
        color: var(--white);
      }
    }
    > svg {
      width: 40px;
      height: 40px;
      margin-left: 15px;
      margin-top: 15px;
      color: var(--green);
    }
  }

  div {
    height: 77px;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;
    > p {
      font-weight: 700;
    }

    > span {
      background-color: var(--lightgreen);
      color: var(--green);
      height: fit-content;
      border-radius: 5px;
      padding: 5px;
      justify-content: center;
    }
  }

  aside {
    position: relative;
    width: fit-content;
    left: 9%;
    color: var(--grey50);
    cursor: pointer;
    @media (min-width: 700px) {
      left: 59%;
    }
    @media (min-width: 1000px) {
      left: 20%;
    }

    > p {
      margin-bottom: 10px;
    }
  }
`;
