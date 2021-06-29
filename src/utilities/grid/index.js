import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  padding: 0;
`;

export const Col = styled.div`
  flex: ${props => props.width};
  padding: 0 10px; 
`;