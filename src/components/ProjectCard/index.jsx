import { ContainerProject } from "./style";
import { FiGitPullRequest } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <ContainerProject>
      <section>
        <FiGitPullRequest />
      </section>
      <div>
        <p>Javascript</p>
        <span>NextsJS</span>
      </div>
      <aside>Edit</aside>
    </ContainerProject>
  );
};

export default ProjectCard;
