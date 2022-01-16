import { breakpoints } from '@styles/theme/global';
import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Example_ = styled.h1<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  color: ${({ color }) => color};

  @media screen and (min-width: ${breakpoints.md}px) {
    color: #000;
  }
`;
