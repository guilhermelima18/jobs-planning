import { AiOutlineInfoCircle } from "react-icons/ai";
import { GoDiffAdded } from "react-icons/go";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo-jobs-planning.svg";
import { GenericButton } from "../Button";
import {
  BoxDayHours,
  BoxLogo,
  BoxProfile,
  BoxProjectsInformation,
  HeaderContainer,
  NavContainer,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <BoxLogo>
          <img src={logoImg} alt="Logo Jobs Planning" />
          <h1>Jobs Planning</h1>
        </BoxLogo>
        <BoxDayHours>
          <h5>
            <AiOutlineInfoCircle fontSize={24} color="var(--secondary-color)" />
            Você tem
            <strong style={{ margin: "0 5px" }}>2 horas</strong>
            livre no seu dia.
          </h5>
        </BoxDayHours>
        <BoxProfile>
          <div>
            <h3>Guilherme</h3>
            <Link to="/profile">
              <h5>Ver perfil</h5>
            </Link>
          </div>
          <Link to="/profile">
            <img
              src="https://github.com/guilhermelima18.png"
              alt="Avatar do usuário"
            />
          </Link>
        </BoxProfile>
      </NavContainer>

      <NavContainer>
        <BoxProjectsInformation>
          <div>
            <h2>12</h2>
            <span>Projetos ao total</span>
          </div>
          <div>
            <h2>7</h2>
            <span>Em andamento</span>
          </div>
          <div>
            <h2>4</h2>
            <span>Encerrados</span>
          </div>
        </BoxProjectsInformation>
        <Link to="/create-job">
          <GenericButton backgroundColor="newJob">
            <GoDiffAdded fontSize={24} color="white" />
            ADICIONAR NOVO JOB
          </GenericButton>
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
};
