import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const _SIZES = new Map([
  ['sm', '0.6rem 1.2rem'],
  ['md', '0.8rem 1.6rem'],
  ['lg', '1.1rem 2.2rem'],
]);

const _wrapperModifiers = {
  setBoxShadow: () => css`
    box-shadow: 0 0.2rem 0.3rem rgba(51, 51, 51, 0.2);
  `,
  setSize: (value: string) => css`
    padding: ${_SIZES.get(value)};
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ disabled, disableShadow, size, variant }) => {
    const _enableShadow = variant === 'default' && !disableShadow && !disabled;

    return css`
      background-color: ${variant !== 'default' ? '#fff' : '#e0e0e0'};
      border: 0.1rem solid ${variant === 'outline' ? '#3d5afe' : 'transparent'};
      border-radius: 0.6rem;
      color: ${variant !== 'default' ? '#3d5afe' : '#3f3f3f'};
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
        background-color: ${variant === 'text' ? '#fff' : '#e0e0e0'};
        border-color: transparent;
        color: #9e9e9e;
        cursor: not-allowed;
      }

      ${_enableShadow && _wrapperModifiers.setBoxShadow()}
      ${!!size && _wrapperModifiers.setSize(size)}
    `;
  }}
`;
