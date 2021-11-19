import { Container, Form } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Container>
      <h1>
        Kenzie <span>Hub</span>
      </h1>
      <Form>
        <Input placeholder="Login" />
        <Input placeholder="Senha" type="password" />
        <Button>Logar</Button>
        <p>
          Criar uma Página para mostrar suas
          <span>habilidades, metas e progresso</span>
        </p>
        <Button colorSchema="">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
