import styled from 'styled-components';

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
