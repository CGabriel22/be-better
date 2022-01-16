import styled, { css } from 'styled-components';

interface TextProps {
  type: 'body' | 'button' | 'h3' | 'link';
  color?: string;
  weight?: number;
  margin?: string;
}

export const T = styled.p<TextProps>`
  font-family: 'Roboto';
  color: ${(props) => (props.color ? props.color : 'var(--on-surface)')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};

  ${({ type }) =>
    type === 'body' &&
    css`
      font-size: 1.125rem;
      line-height: 1.625rem;
    `}

  ${({ type }) =>
    type === 'button' &&
    css`
      font-size: 1rem;
      line-height: 1.5rem;
    `}

  ${({ type }) =>
    type === 'h3' &&
    css`
      font-size: 3rem;
      line-height: 3.5rem;
    `}

  ${({ type }) =>
    type === 'link' &&
    css`
      font-size: 1rem;
      line-height: 1.5rem;
      text-decoration: underline;
      &:hover {
        opacity: 0.7;
      }
    `}
`;
