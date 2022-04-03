import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HeaderNavContainer, NavContainer } from "./styles";

export const HeaderNav = () => {
  return (
    <HeaderNavContainer>
      <NavContainer>
        <div>
          <Link to="/">
            <BsArrowLeft fontSize={24} color="white" />
          </Link>
          <h5>Meu perfil</h5>
        </div>
      </NavContainer>
    </HeaderNavContainer>
  );
};
