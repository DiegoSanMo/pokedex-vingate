import React, { ReactNode } from 'react'
import { ScreenStyled } from './styles'
interface IPokedeProps {
    children: ReactNode
}

export default function Pokedex({children}: IPokedeProps) {
  return (
    <ScreenStyled >{children}</ScreenStyled>
  )
}
