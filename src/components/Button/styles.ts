import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const variantStyles = `
  background-color: #fff;
  color: #3d5afe;
`;
const wrapperModifiers = {
  outline: () => css`
    ${variantStyles}
    border: 0.1rem solid #3d5afe;
  `,
  text: () => css`
    ${variantStyles}
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ variant }) => css`
    background-color: #e0e0e0;
    border: 0.1rem solid transparent;
    border-radius: 0.6rem;
    color: #3f3f3f;
    cursor: pointer;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding: 0.8rem 1.6rem;
    text-align: center;
    transition: background-color 0.25s ease-in-out;

    ${variant && wrapperModifiers[variant]()}
  `}
`;
