import { ContainerTech } from "./style";
import { useState } from "react";
import EditTech from "../../components/EditTech";
import { FiCodesandbox } from "react-icons/fi";

const TechCard = ({ title, status, deleteTech, id }) => {
  const [editTVisible, setEditTVisible] = useState(false);

  const edit = () => {
    setEditTVisible(true);
  };

  return (
    <>
      <ContainerTech>
        <section>
          <FiCodesandbox />
        </section>
        <div>
          <p>{title}</p>
          <span>{status}</span>
        </div>
        <aside>
          <p onClick={() => edit()}>Edit</p>
          <p onClick={deleteTech}>Delete</p>
        </aside>
      </ContainerTech>
      {editTVisible && (
        <EditTech
          status={status}
          title={title}
          setEditTVisible={setEditTVisible}
          id={id}
        />
      )}
    </>
  );
};

export default TechCard;
