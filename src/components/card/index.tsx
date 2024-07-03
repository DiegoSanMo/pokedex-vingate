import { ICardProps } from "./interface";
import { CardContainer } from "./styles";

const Card = ({ children, actions, onClick }: ICardProps) => {
  return (
    <CardContainer onClick={onClick}>
      {children && children}
      {actions && actions}
    </CardContainer>
  );
};

export default Card;
