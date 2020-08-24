import React from 'react'
import * as S from './styles'
import { LogoProps } from 'types/api'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={`${url}`} alt={alternativeText} />
)

export default Logo
