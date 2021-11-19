import { PopContainer, PopContent, PopHeader } from "./style";
import Button from "../Button";

const LoginPopup = () => {
  return (
    <PopContainer>
      <PopHeader>
        <p>Sucesso</p>
        <span>X</span>
      </PopHeader>
      <PopContent>
        <h3>Yeeesss!</h3>
        <p>Tudo certinho, seu cadastro deu bom demais</p>
        <span>Agora basta fazer seu login e começar sua jornada...</span>
        <Button colorSchema="green">Ir para login</Button>
      </PopContent>
    </PopContainer>
  );
};
export default LoginPopup;
