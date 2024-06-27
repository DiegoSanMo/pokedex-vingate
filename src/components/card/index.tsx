import { ICardProps } from "./interface";
import { CardContainer, TitleStyled } from "./styles";

const Card = ({ title, children, actions }: ICardProps) => {
  return (
    <CardContainer >
      <TitleStyled>{title}</TitleStyled>
      {children && children}
      {actions && actions}
    </CardContainer>
  );
};

export default Card;
