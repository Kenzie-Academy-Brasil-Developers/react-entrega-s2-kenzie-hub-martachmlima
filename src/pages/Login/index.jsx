import { Container, Form } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Redirect } from "react-router";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const handleHistory = () => {
    history.push("/cadastro");
  };

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
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
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));
        setAuthenticated(true);
        console.log(response);
        history.push("/perfil");
      })
      .catch((err) => {
        console.log(err);
        toast.error("E-mail ou senha inválidos");
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
          <input placeholder="Email" type="text" {...register("email")} />
        </Input>
        <p>{errors.email?.message}</p>
        <Input>
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
        </Input>
        <p>{errors.password?.message}</p>
        <Button type="submit">Logar</Button>
        <section>
          Criar uma Página para mostrar suas
          <span>habilidades, metas e progresso</span>
        </section>
        <Button onClick={() => handleHistory()} colorSchema="">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
