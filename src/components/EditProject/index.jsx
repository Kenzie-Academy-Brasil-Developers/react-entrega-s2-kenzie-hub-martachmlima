import { Container } from "./style";
import Input from "../Input";
import Button from "../Button";

const EditProject = () => {
  return (
    <Container>
      <p>
        <h4>Cadastrar Trabalho</h4> <span>X</span>
      </p>
      <Input></Input>
      <Input></Input>
      <div>
        <Button colorSchema="green">Salvar Alterações</Button>
        <Button colorSchema="">Excluir</Button>
      </div>
    </Container>
  );
};

export default EditProject;
