import { Header, Container, Content, ProfileCard } from "./style";
import Button from "../../components/Button";
import TechCard from "../../components/TechCard";
import ProjectCard from "../../components/ProjectCard";
import { Redirect } from "react-router";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import AddTech from "../../components/AddTech";
import AddProject from "../../components/AddProject";

const Perfil = ({ authenticated }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [makeVisible, setMakeVisible] = useState(false);

  const changeVisibility = () => {
    setIsVisible(true);
  };

  const changeProdVisibility = () => {
    setMakeVisible(true);
  };

  const [techs, setTechs] = useState();

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );


  const getTechs = () => {
    axios
      .get("https://kenziehub.herokuapp.com/users/techs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        /* toast.error("E-mail ou senha inválidos"); */
      });
  };

  const createTech = () => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        /* toast.error("E-mail ou senha inválidos"); */
      });
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header>
        <h1>
          Kenzie <span>Hub</span>
        </h1>
      </Header>
      <Container>
        <Content>
          <span>
            <h4>Minhas Tecnologias</h4>
            <Button colorSchema="green" onClick={() => changeVisibility()}>
              +
            </Button>
          </span>
          <TechCard />
          <TechCard />
          <TechCard />
        </Content>
        <Content>
          <span>
            <h4>Meus trabalhos</h4>
            <Button onClick={() => changeProdVisibility()}>+</Button>
          </span>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Content>
        <ProfileCard>
          <div>
            <p>Nome do Kenzinho</p>
            <span>Módulo do Kenzinho</span>
          </div>
          <section>
            <p>Ligar agora</p>
            <p>contato do kenzinho</p>
          </section>
          <section>
            <p>Enviar e-mail</p>
            <p>e-mail do kenzinho</p>
          </section>
          <Button colorSchema="">Sair</Button>
        </ProfileCard>
        {isVisible && <AddTech setIsVisible={setIsVisible} />}
        {makeVisible && <AddProject setMakeVisible={setMakeVisible} />}
      </Container>
    </>
  );
};

export default Perfil;
