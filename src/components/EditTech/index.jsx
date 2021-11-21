import { Container } from "./style";
import Input from "../Input";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EditTech = ({ setEditTVisible, title, status, changeTech }) => {
  const hide = () => {
    setEditTVisible(false);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container onSubmit={handleSubmit(changeTech)}>
      <section>
        <h4>Editar Tecnologia</h4>
        <span onClick={() => hide()}>X</span>
      </section>
      <Input>
        <input placeholder={title}></input>
      </Input>
      <p>Selecionar status:</p>
      <select {...register("status")} defaultValue={status}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <p>{errors.status?.message}</p>
      <div>
        <Button type="submit" colorSchema="green">
          Salvar Alterações
        </Button>
      </div>
    </Container>
  );
};

export default EditTech;
