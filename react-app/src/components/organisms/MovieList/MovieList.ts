import styled from 'styled-components';

const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 0 0 30px 0;
  justify-content: space-evenly;
  align-content: flex-start;
  
  @media (min-width: 768px) {
    gap: 3em;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export default MoviesWrapper;
