import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  disableShadow?: boolean;
  variant?: 'default' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
};

const Button = ({
  children,
  disabled,
  disableShadow,
  color = 'default',
  size = 'md',
  variant = 'default',
}: ButtonProps) => (
  <S.Wrapper
    color={color}
    disabled={disabled}
    disableShadow={disableShadow}
    size={size}
    variant={variant}
  >
    {children}
  </S.Wrapper>
);

export default Button;
