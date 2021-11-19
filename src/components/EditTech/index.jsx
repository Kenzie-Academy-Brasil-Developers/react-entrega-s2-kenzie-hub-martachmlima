import { Container } from "./style";
import Input from "../Input";
import Button from "../Button";

const EditTech = () => {
  return (
    <Container>
      <section>
        <h4>Cadastrar Tecnologia</h4>
        <span>X</span>
      </section>
      <Input></Input>
      <p>Selecionar status:</p>
      <div>
        <span>Iniciante</span>
        <span>Intermediário</span>
        <span>Avançado</span>
      </div>
      <div>
        <Button colorSchema="green">Salvar Alterações</Button>
        <Button colorSchema="">Excluir</Button>
      </div>
    </Container>
  );
};

export default EditTech;
