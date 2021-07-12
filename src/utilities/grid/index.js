import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const PageContainer = styled.div`
  margin: 160px auto 1100px;
  padding: 0 100px 100px 350px;
  max-width: 1100px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Col = styled.div`
  flex: ${props => props.width};
  padding: 0 10px; 
`;