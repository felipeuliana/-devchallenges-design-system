import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const _COLORS = new Map([
  ['danger', { regular: '#d32f2f', alternative: '#fff' }],
  ['default', { regular: '#e0e0e0', alternative: '#3f3f3f' }],
  ['primary', { regular: '#2962ff', alternative: '#fff' }],
  ['secondary', { regular: '#455a64', alternative: '#fff' }],
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
  `,
  outline: (color: string) => css`
    background-color: ${color !== 'default'
      ? _COLORS.get(color)?.alternative
      : 'transparent'};
    border-color: ${_COLORS.get(color)?.regular};
    color: ${_COLORS.get(color)?.regular};
  `,
  text: (color: string) => css`
    background-color: ${color !== 'default'
      ? _COLORS.get(color)?.alternative
      : 'transparent'};
    border-color: transparent;
    color: ${_COLORS.get(color)?.regular};
  `,
  setBoxShadow: () => css`
    box-shadow: 0 0.2rem 0.3rem rgba(51, 51, 51, 0.2);
  `,
  setSize: (size: string) => css`
    padding: ${_SIZES.get(size)};
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ color, disabled, disableShadow, size, variant }) => {
    const _enableShadow = variant === 'default' && !disableShadow && !disabled;

    return css`
      border: 0.1rem solid;
      border-radius: 0.6rem;
      cursor: pointer;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      padding: 0.8rem 1.6rem;
      text-align: center;
      transition: background-color 0.25s ease-in-out;

      &[disabled] {
        background-color: ${variant === 'text'
          ? 'transparent'
          : _COLORS.get('default')?.regular};
        border-color: transparent;
        color: #9e9e9e;
        cursor: not-allowed;
      }

      ${_enableShadow && _wrapperModifiers.setBoxShadow()}
      ${!!size && _wrapperModifiers.setSize(size)}
      ${!!variant && !!color && _wrapperModifiers[variant](color)}
    `;
  }}
`;
