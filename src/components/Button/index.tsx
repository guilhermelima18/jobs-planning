import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  backgroundColor: "newJob" | "saveJob" | "deleteJob" | "cancel";
}

export const GenericButton = ({
  children,
  backgroundColor,
  ...props
}: ButtonProps) => {
  return (
    <Button backgroundColor={backgroundColor} {...props}>
      {children}
    </Button>
  );
};
