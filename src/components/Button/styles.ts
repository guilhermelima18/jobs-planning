import styled from "styled-components";

type ButtonProps = {
  backgroundColor: "newJob" | "saveJob" | "deleteJob" | "cancel";
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.backgroundColor === "newJob"
      ? "var(--secondary-color)"
      : props.backgroundColor === "saveJob"
      ? "var(--text-green)"
      : props.backgroundColor === "deleteJob"
      ? "var(--text-red)"
      : "var(--button-cancel)"};
  width: 260px;
  height: 50px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0;
  outline: none;
  color: ${(props) => (props.backgroundColor === "cancel" ? "#333" : "white")};
  border-radius: 5px;
  transition: 400ms;

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor === "newJob"
        ? "var(--button-new-job-hover)"
        : props.backgroundColor === "saveJob"
        ? "var(--button-save-job-hover)"
        : props.backgroundColor === "deleteJob"
        ? "var(--button-delete-job-hover)"
        : "var(--button-cancel-hover)"};
  }
`;
