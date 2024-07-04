import { ICardProps } from "./interface";
import { CardContainer } from "./styles";

const Card = ({ children, actions, onClick,  onMouseEnter, onMouseLeave, ...props}: ICardProps) => {
  return (
    <CardContainer onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>
      {children && children}
      {actions && actions}
    </CardContainer>
  );
};

export default Card;
