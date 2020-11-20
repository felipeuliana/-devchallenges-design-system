import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  variant: 'outline' | 'text' | null;
};

const Button = ({ children, variant = null }: ButtonProps) => (
  <S.Wrapper variant={variant}>{children}</S.Wrapper>
);

export default Button;
