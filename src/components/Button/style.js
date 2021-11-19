import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) =>
    props.colorSchema === "purple"
      ? "#403CAA"
      : props.colorSchema === "green"
      ? "#11995E"
      : "#F5F5F5"};
  color: ${(props) =>
    props.colorSchema === "purple"
      ? "#FFFFFF"
      : props.colorSchema === "green"
      ? "#FFFFFF"
      : "#999999"};
  border: none;
  width: 157px;
  height: 60px;
  border-radius: 8px;
  padding: 0px 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  :hover {
    border: 2px solid var(--grey100);
  }
`;
