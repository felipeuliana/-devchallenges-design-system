import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const _COLORS = new Map([
  [
    'danger',
    {
      alternative: '#fff',
      dark: '#9a0007',
      regular: '#d32f2f',
    },
  ],
  [
    'default',
    {
      alternative: '#3f3f3f',
      dark: '#aeaeae',
      regular: '#e0e0e0',
    },
  ],
  [
    'primary',
    {
      alternative: '#fff',
      dark: '#0039cb',
      light: 'rgba(41, 98, 255, 0.1)',
      regular: '#2962ff',
    },
  ],
  [
    'secondary',
    {
      alternative: '#fff',
      dark: '#1c313a',
      regular: '#455a64',
    },
  ],
]);

const _SIZES = new Map([
  ['lg', '1.1rem 2.2rem'],
  ['md', '0.8rem 1.6rem'],
  ['sm', '0.6rem 1.2rem'],
]);

const _wrapperModifiers = {
  default: (color: string) => css`
    background-color: ${_COLORS.get(color)?.regular};
    border-color: ${_COLORS.get(color)?.regular};
    color: ${_COLORS.get(color)?.alternative};

    &:focus,
    &:hover {
      background-color: ${_COLORS.get(color)?.dark};
      border-color: ${_COLORS.get(color)?.dark};
    }
  `,
  outline: () => css`
    background-color: ${_COLORS.get('primary')?.alternative};
    border-color: ${_COLORS.get('primary')?.regular};
    color: ${_COLORS.get('primary')?.regular};

    &:focus,
    &:hover {
      background-color: ${_COLORS.get('primary')?.light};
    }
  `,
  text: () => css`
    background-color: transparent;
    border-color: transparent;
    color: ${_COLORS.get('primary')?.regular};

    &:focus,
    &:hover {
      background-color: ${_COLORS.get('primary')?.light};
    }
  `,
  setBoxShadow: () => css`
    box-shadow: 0 0.2rem 0.3rem rgba(51, 51, 51, 0.2);
  `,
  setDisabled: (hasBackground: boolean) => css`
    &[disabled] {
      background-color: ${hasBackground
        ? _COLORS.get('default')?.regular
        : _COLORS.get('primary')?.alternative};
      border-color: transparent;
      color: #9e9e9e;
      pointer-events: none;
    }
  `,
  setSize: (size: string) => css`
    padding: ${_SIZES.get(size)};
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({
    color,
    disabled,
    disableShadow,
    leftIcon,
    rightIcon,
    size,
    variant,
  }) => {
    const _enableShadow = variant === 'default' && !disableShadow && !disabled;

    return css`
      border: 0.1rem solid;
      border-radius: 0.6rem;
      cursor: pointer;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2rem;
      padding: 0.8rem 1.6rem;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.25s ease-in-out,
        border-color 0.25s ease-in-out;

      & > svg {
        fill: currentColor;
        height: 2rem;
        ${!!rightIcon && 'margin-left: 0.5rem'};
        ${!!leftIcon && 'margin-right: 0.5rem'};
      }

      ${!!variant && !!color && _wrapperModifiers[variant](color)}
      ${!!size && _wrapperModifiers.setSize(size)}
      ${disabled && _wrapperModifiers.setDisabled(variant !== 'text')}
      ${_enableShadow && _wrapperModifiers.setBoxShadow()}
    `;
  }}
`;
