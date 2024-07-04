import { ReactNode } from "react";
import { ButtonStyled, Variant } from "./styles";

interface ButtonProps {
    onClick: any;
    type: Variant;
    children: ReactNode
}

export const Button = ({onClick, type, children}: ButtonProps) => {

    return <ButtonStyled $type={type} onClick={onClick}>{children}</ButtonStyled>
}

export default Button;