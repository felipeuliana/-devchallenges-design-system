import React, { ReactNode } from 'react';
import * as S from './styles';

export type ButtonProps = {
  children?: ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  disableShadow?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'text';
};

const Button = ({
  children,
  color = 'default',
  disabled,
  disableShadow,
  leftIcon,
  rightIcon,
  size = 'md',
  variant = 'default',
}: ButtonProps) => (
  <S.Wrapper
    color={color}
    disabled={disabled}
    disableShadow={disableShadow}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    size={size}
    variant={variant}
  >
    {leftIcon}
    {children}
    {rightIcon}
  </S.Wrapper>
);

export default Button;
