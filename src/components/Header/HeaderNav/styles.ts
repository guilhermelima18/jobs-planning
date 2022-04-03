import styled from "styled-components";

export const HeaderNavContainer = styled.header`
  background-color: var(--primary-color);
  width: 100%;
  padding: 2rem 1rem;
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  > div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
`;
