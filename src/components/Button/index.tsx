import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  disableShadow?: boolean;
  variant?: 'outline' | 'text' | null;
};

const Button = ({
  children,
  disabled,
  disableShadow,
  variant = null,
}: ButtonProps) => (
  <S.Wrapper
    disabled={disabled}
    disableShadow={disableShadow}
    variant={variant}
  >
    {children}
  </S.Wrapper>
);

export default Button;
