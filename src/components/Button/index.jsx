import { Container } from "./style";

const Button = ({ children, colorSchema = "purple", ...rest }) => {
  return (
    <Container colorSchema={colorSchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
