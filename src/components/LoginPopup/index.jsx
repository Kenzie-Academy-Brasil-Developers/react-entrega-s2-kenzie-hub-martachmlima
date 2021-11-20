import { PopContainer, PopContent, PopHeader } from "./style";
import Button from "../Button";
import { useHistory } from "react-router";

const LoginPopup = ({ setSuccess }) => {
  const history = useHistory();

  const handlePush = () => {
    history.push("/");
  };

  return (
    <PopContainer>
      <PopHeader>
        <p>Sucesso</p>
        <span onClick={() => setSuccess(false)}>X</span>
      </PopHeader>
      <PopContent>
        <h3>Yeeesss!</h3>
        <p>Tudo certinho, seu cadastro deu bom demais</p>
        <span>Agora basta fazer seu login e começar sua jornada...</span>
        <Button colorSchema="green" onClick={() => handlePush()}>
          Ir para login
        </Button>
      </PopContent>
    </PopContainer>
  );
};
export default LoginPopup;
