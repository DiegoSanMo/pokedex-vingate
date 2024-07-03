import { ReactNode } from "react";

export interface ICardProps{
    children?: ReactNode;
    actions?: ReactNode;
    onClick?: () => void;
}