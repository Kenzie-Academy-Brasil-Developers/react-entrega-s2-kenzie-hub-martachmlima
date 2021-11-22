import { ContainerProject } from "./style";
import { FiGitPullRequest } from "react-icons/fi";
import { useState } from "react";
import EditProject from "../EditProject";

const ProjectCard = ({ title, description, deleteWork, deploy_url }) => {
  const [editPVisible, setEditPVisible] = useState(false);

  const edit = () => {
    setEditPVisible(true);
  };
  return (
    <>
      <ContainerProject>
        <section>
          <FiGitPullRequest />
        </section>
        <div>
          <p>{title}</p>
          <span>{description}</span>
        </div>
        <aside>
          <p onClick={() => edit()}>Edit</p>
          <p onClick={deleteWork}>Delete</p>
        </aside>
      </ContainerProject>
      {editPVisible && (
        <EditProject
          setEditPVisible={setEditPVisible}
          deploy_url={deploy_url}
          title={title}
          description={description}
        />
      )}
    </>
  );
};

export default ProjectCard;
