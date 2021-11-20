import { Container } from "./style";
import Input from "../Input";
import Button from "../Button";

const AddProject = ({ setMakeVisible }) => {
  const changeVisibility = () => {
    setMakeVisible(false);
  };
  return (
    <Container>
      <p>
        <h4>Cadastrar Trabalho</h4>{" "}
        <span onClick={() => changeVisibility()}>X</span>
      </p>
      <Input placeholder="Nome do Trabalho"></Input>
      <Input placeholder="Descrição do Trabalho"></Input>
      <Button>Cadastrar</Button>
    </Container>
  );
};

export default AddProject;
