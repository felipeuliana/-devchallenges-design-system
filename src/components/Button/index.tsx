import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  as?: ElementType;
  children?: ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  disableShadow?: boolean;
  href?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'text';
} & ButtonTypes;

const Button = ({
  children,
  color = 'default',
  leftIcon,
  rightIcon,
  size = 'md',
  variant = 'default',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    color={color}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    size={size}
    variant={variant}
    {...props}
  >
    {leftIcon}
    {children}
    {rightIcon}
  </S.Wrapper>
);

export default Button;
