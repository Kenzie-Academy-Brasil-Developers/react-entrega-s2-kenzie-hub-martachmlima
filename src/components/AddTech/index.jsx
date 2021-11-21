import { Container } from "./style";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AddTech = ({ setIsVisible, loadTechs }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const createTech = ({ title, status }) => {
    axios
      .post(
        "https://kenziehub.herokuapp.com/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTechs())
      .catch((err) => {
        console.log(err);
      });
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

  const changeVisibility = () => {
    setIsVisible(false);
  };

  return (
    <Container onSubmit={handleSubmit(createTech)}>
      <section>
        <h4>Cadastrar Tecnologia</h4>
        <span onClick={() => changeVisibility()}>X</span>
      </section>
      <Input>
        <input placeholder="nome da Tech" {...register("title")}></input>
        <p>{errors.title?.message}</p>
      </Input>
      <p>Selecionar status:</p>
      <select {...register("status")}>
        <option defaultValue="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <p>{errors.status?.message}</p>
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
};

export default AddTech;
