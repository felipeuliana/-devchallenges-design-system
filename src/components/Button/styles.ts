import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const wrapperModifiers = {
  boxShadow: () => css`
    box-shadow: 0 0.2rem 0.3rem rgba(51, 51, 51, 0.2);
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ disabled, disableShadow, variant }) => css`
    background-color: ${!!variant ? '#fff' : '#e0e0e0'};
    border: 0.1rem solid ${variant === 'outline' ? '#3d5afe' : 'transparent'};
    border-radius: 0.6rem;
    color: ${!!variant ? '#3d5afe' : '#3f3f3f'};
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

    ${!variant && !disableShadow && !disabled && wrapperModifiers.boxShadow()}
  `}
`;
