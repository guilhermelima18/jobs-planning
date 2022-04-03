import styled from "styled-components";

export const CardContainer = styled.aside`
  background-color: white;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 30px;
`;

export const BoxProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > img {
    width: 100%;
    max-width: 150px;
    border-radius: 50%;
    border: 2px solid var(--secondary-color);
  }
`;

export const BoxProfileSave = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  > h5 {
    text-align: center;
    line-height: 22px;
  }
`;
