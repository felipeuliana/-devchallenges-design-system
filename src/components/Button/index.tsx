import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  disableShadow?: boolean;
  variant?: 'outline' | 'text' | null;
};

const Button = ({ children, disableShadow, variant = null }: ButtonProps) => (
  <S.Wrapper disableShadow={disableShadow} variant={variant}>
    {children}
  </S.Wrapper>
);

export default Button;
