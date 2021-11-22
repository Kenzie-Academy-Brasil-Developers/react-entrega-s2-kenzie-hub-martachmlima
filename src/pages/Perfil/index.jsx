import { Header, Container, Content, ProfileCard } from "./style";
import Button from "../../components/Button";
import TechCard from "../../components/TechCard";
import ProjectCard from "../../components/ProjectCard";
import { Redirect } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import AddTech from "../../components/AddTech";
import AddProject from "../../components/AddProject";
import EditProject from "../../components/EditProject";
import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Perfil = ({ authenticated }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [makeVisible, setMakeVisible] = useState(false);

  const [editPVisible, setEditPVisible] = useState(false);

  const changeVisibility = () => {
    setIsVisible(true);
  };

  const changeProdVisibility = () => {
    setMakeVisible(true);
  };

  const [user] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || ""
  );

  const [techs, setTechs] = useState(user.techs);

  const loadTechs = () => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const deleteTech = (id) => {
    const newTechs = techs.filter((tech) => tech.id !== id);

    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechs(newTechs))
      .catch((err) => {
        console.log(err);
      });
  };

  const changeTech = (id, status) => {
    axios
      .put(
        `https://kenziehub.herokuapp.com/users/techs/${id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadTechs();
  }, []);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header>
        <h1>
          Kenzie <span>Hub</span>
        </h1>
        <p>Olá, {user.name}!</p>
      </Header>
      <Container>
        <Content>
          <span>
            <h4>Minhas Tecnologias</h4>
            <Button colorSchema="green" onClick={() => changeVisibility()}>
              +
            </Button>
          </span>
          {techs.map((item) => (
            <TechCard
              key={item.id}
              title={item.title}
              status={item.status}
              deleteTech={() => deleteTech(item.id)}
              changeTech={() => changeTech(item.id, item.status)}
            />
          ))}
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
            <p>{user.name}</p>
            <span>{user.course_module}</span>
          </div>
          <section>
            <aside>
              <p>Ligar agora</p>
              <p>{user.contact}</p>
            </aside>
            <section>
              <FiSmartphone />
            </section>
          </section>
          <section>
            <aside>
              <p>Enviar e-mail</p>
              <p>{user.email}</p>
            </aside>
            <article>
              <FiMail />
            </article>
          </section>
          <Button colorSchema="">Sair</Button>
        </ProfileCard>
        {isVisible && (
          <AddTech setIsVisible={setIsVisible} loadTechs={loadTechs} />
        )}
        {makeVisible && <AddProject setMakeVisible={setMakeVisible} />}
        {editPVisible && <EditProject setEditPVisible={setEditPVisible} />}
      </Container>
    </>
  );
};

export default Perfil;
