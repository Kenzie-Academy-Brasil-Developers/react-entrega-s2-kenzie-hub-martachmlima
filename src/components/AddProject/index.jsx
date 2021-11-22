import { Container } from "./style";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AddProject = ({ setMakeVisible, loadWorks }) => {
  const changeVisibility = () => {
    setMakeVisible(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const createWorks = ({ title, description, deploy_url }) => {
    axios
      .post(
        "https://kenziehub.herokuapp.com/users/works",
        {
          title: title,
          description: description,
          deploy_url: deploy_url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadWorks())
      .catch((err) => {
        console.log(err);
      });
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
    <Container onSubmit={handleSubmit(createWorks)}>
      <p>
        <h4>Cadastrar Trabalho</h4>{" "}
        <span onClick={() => changeVisibility()}>X</span>
      </p>
      <Input>
        <input placeholder="Nome do Trabalho" {...register("title")}></input>
        <p>{errors.title?.message}</p>
      </Input>
      <Input>
        <input
          placeholder="Descrição do Trabalho"
          {...register("description")}
        ></input>
        <p>{errors.description?.message}</p>
      </Input>
      <Input>
        <input placeholder="Url" {...register("deploy_url")}></input>
        <p>{errors.deploy_url?.message}</p>
      </Input>
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
};

export default AddProject;
