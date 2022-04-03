import { GenericButton } from "../Button";
import { BoxProfile, BoxProfileSave, CardContainer } from "./styles";

export const CardProfile = () => {
  return (
    <CardContainer>
      <BoxProfile>
        <img
          src="https://github.com/guilhermelima18.png"
          alt="Avatar do usuário"
        />
        <h1>Guilherme</h1>
      </BoxProfile>
      <BoxProfileSave>
        <h5>
          O valor da sua hora é<br />
          <strong>R$ 75,00 reais</strong>
        </h5>
        <GenericButton backgroundColor="saveJob">SALVAR DADOS</GenericButton>
      </BoxProfileSave>
    </CardContainer>
  );
};
