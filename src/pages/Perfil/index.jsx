import { Header, Container, Content, ProfileCard } from "./style";
import Button from "../../components/Button";
import { useState } from "react";
import TechCard from "../../components/TechCard";
import ProjectCard from "../../components/ProjectCard";
import EditProject from "../../components/EditProject";

const Perfil = () => {
  const [techs, setTechs] = useState([]);
  const [projects, setProjects] = useState([]);
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
            <Button colorSchema="green">+</Button>
          </span>
          <TechCard />
          <TechCard />
          <TechCard />
        </Content>
        <Content>
          <span>
            <h4>Meus trabalhos</h4>
            <Button>+</Button>
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
      </Container>
    </>
  );
};

export default Perfil;
