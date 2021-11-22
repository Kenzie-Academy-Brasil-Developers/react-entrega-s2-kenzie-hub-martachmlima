import { Container } from "./style";
import Input from "../Input";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EditProject = ({ setEditPVisible, title, description, deploy_url }) => {
  const hide = () => {
    setEditPVisible(false);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    deploy_url: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <Container>
      <section>
        <h4>Editar Trabalho</h4> <span onClick={() => hide()}>X</span>
      </section>
      <Input>
        <input placeholder={title} {...register("title")}></input>
        <p>{errors.title?.message}</p>
      </Input>
      <Input>
        <input
          placeholder={description}
          {...register("description")}
        ></input>
        <p>{errors.description?.message}</p>
      </Input>
      <Input>
        <input placeholder={deploy_url} {...register("deploy_url")}></input>
        <p>{errors.deploy_url?.message}</p>
      </Input>
      <div>
        <Button type="submit" colorSchema="green">
          Salvar Alterações
        </Button>
      </div>
    </Container>
  );
};

export default EditProject;
