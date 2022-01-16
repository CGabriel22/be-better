import styled from 'styled-components';

interface Props {
  type?: 'default' | 'filled';
}

export const IconButton = styled.button<Props>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ type }) =>
    type == 'default' ? 'var(--transparent)' : 'var(--primary-color)'};
  &:hover {
    background-color: var(--primary-t-hover);
  }
  transition: all 0.3s ease;
`;
