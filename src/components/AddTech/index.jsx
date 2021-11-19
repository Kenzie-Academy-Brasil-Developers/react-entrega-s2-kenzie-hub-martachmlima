import { Container } from "./style";
import Input from "../Input";
import Button from "../Button";

const AddTech = () => {
  return (
    <Container>
      <section>
        <h4>Cadastrar Tecnologia</h4>
        <span>X</span>
      </section>
      <Input placeholder="nome da Tech"></Input>
      <p>Selecionar status:</p>
      <div>
        <span>Iniciante</span>
        <span>Intermediário</span>
        <span>Avançado</span>
      </div>
      <Button>Cadastrar</Button>
    </Container>
  );
};

export default AddTech;
