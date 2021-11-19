import styled from "styled-components";

export const ContainerProject = styled.div`
  height: 77px;
  width: 200px;
  display: flex;
  margin-bottom: 15px;

  section {
    height: 77px;
    width: 71px;
    background-color: var(--lightpurple);
    border-radius: 5px;
    margin-left: 20px;
  }

  div {
    height: 77px;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;
    p {
      font-weight: 700;
    }

    span {
      background-color: var(--lightpurple);
      color: var(--purple);
      height: fit-content;
      border-radius: 5px;
      padding: 5px;
    }
  }
`;