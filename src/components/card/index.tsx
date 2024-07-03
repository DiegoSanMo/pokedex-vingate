import { ICardProps } from "./interface";
import { CardContainer } from "./styles";

const Card = ({ title, children, actions, onClick }: ICardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <h4>{title}</h4>
      {children && children}
      {actions && actions}
    </CardContainer>
  );
};

export default Card;
