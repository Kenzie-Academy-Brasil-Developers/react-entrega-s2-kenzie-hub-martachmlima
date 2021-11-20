import { Form, Container } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import LoginPopup from "../../components/LoginPopup";
import { toast } from "react-toastify";
import { Redirect } from "react-router";

const Cadastro = ({ authenticated }) => {
  const [success, setSuccess] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve ter no mínimo 6 dígitos")
      .required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar a conta, tente outro e-mail");
      });
    reset();
  };

  if (authenticated) {
    return <Redirect to="/perfil" />;
  }

  return (
    <Container>
      <h1>
        Kenzie <span>Hub</span>
      </h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <input placeholder="Nome" type="text" {...register("name")}></input>
        </Input>
        <span>{errors.name?.message}</span>
        <Input>
          <input placeholder="Email" type="text" {...register("email")}></input>
        </Input>
        <span>{errors.email?.message}</span>
        <Input>
          <input placeholder="Bio" type="text" {...register("bio")}></input>
        </Input>
        <span>{errors.bio?.message}</span>
        <Input>
          <input
            placeholder="Contato"
            type="text"
            {...register("contact")}
          ></input>
        </Input>
        <span>{errors.contact?.message}</span>
        <p>Selecionar módulo:</p>
        <select {...register("course_module")}>
          <option defaultValue="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <span>{errors.course_module?.message}</span>
        <Input>
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          ></input>
        </Input>
        <span>{errors.password?.message}</span>
        <Input>
          <input
            placeholder="Confirme a senha"
            type="password"
            {...register("confirm_password")}
          ></input>
        </Input>
        <span>{errors.confirm_password?.message}</span>
        <Button colorSchema="purple" type="submit">
          Cadastrar
        </Button>
      </Form>
      {success && <LoginPopup setSuccess={setSuccess} />}
    </Container>
  );
};

export default Cadastro;
