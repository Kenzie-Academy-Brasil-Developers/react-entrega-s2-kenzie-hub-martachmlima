import { Form, Container } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LoginPopup from "../../components/LoginPopup";

const Cadastro = () => {
  return (
    <Container>
      <h1>
        Kenzie <span>Hub</span>
      </h1>
      <Form>
        <Input placeholder="Nome" type="text"></Input>
        <Input placeholder="Email" type="text"></Input>
        <Input placeholder="Bio" type="text"></Input>
        <Input placeholder="Contato" type="text"></Input>
        <div>
          <p>Selecionar módulo:</p>
          <span>Primeiro</span> <span>Segundo</span> <span>Terceiro</span>{" "}
          <span>Quarto</span>
        </div>
        <Input placeholder="Senha" type="text"></Input>
        <Input placeholder="Confirme a senha" type="text"></Input>
        <Button colorSchema="purple">Cadastrar</Button>
      </Form>
      <LoginPopup></LoginPopup>
    </Container>
  );
};

export default Cadastro;
