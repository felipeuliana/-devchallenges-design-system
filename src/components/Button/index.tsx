import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  disableShadow?: boolean;
  variant?: 'default' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
};

const Button = ({
  children,
  disabled,
  disableShadow,
  size = 'md',
  variant = 'default',
}: ButtonProps) => (
  <S.Wrapper
    disabled={disabled}
    disableShadow={disableShadow}
    size={size}
    variant={variant}
  >
    {children}
  </S.Wrapper>
);

export default Button;
