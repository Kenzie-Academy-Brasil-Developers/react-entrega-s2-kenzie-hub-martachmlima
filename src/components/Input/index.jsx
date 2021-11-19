import { StyledInput } from "./style";

const Input = ({ ...rest }) => {
  return (
    <StyledInput>
      <input {...rest} />
    </StyledInput>
  );
};

export default Input;
