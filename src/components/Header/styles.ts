import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  width: 100%;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(200, 200, 200, 0.1);
`;

export const BoxLogo = styled.div`
  width: 33.3%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BoxDayHours = styled.div`
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;

  h5 {
    font-size: 1rem;
    display: flex;
    align-items: center;

    > svg {
      margin-right: 10px;
    }
  }
`;

export const BoxProfile = styled.div`
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;

    a {
      color: white;

      > h5 {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid var(--secondary-color);
  }
`;

export const BoxProjectsInformation = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 50px;
`;
