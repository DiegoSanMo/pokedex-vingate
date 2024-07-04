import { ButtonStyled } from "./styles";

export const Button = (props) => {

    return <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>
}

export default Button;