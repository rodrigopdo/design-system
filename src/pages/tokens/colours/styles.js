import styled from "styled-components";

export const Title = styled.h1`
  color: #4F4F4F;
  font-size: 35px;
  margin: 30px 0;
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.bgColour};
  max-width: 800px;
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(168,168,168, 0.5);
`;

export const ColourTitle = styled.div`
  color: ${(props) => props.colour};

  p {
    font-size: 18px;
    font-weight: 400;
    font-family: "SFMono-Regular",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",Courier,monospace;
    margin-top: 10px;
  }
  button {
    margin: 50px auto 0 0;
    font-weight: 400;
    small {
      opacity: ${(props) => props.show ? '1' : '0'};
    }
    &:hover {
      small {
        opacity: 1;
      }
    }
  }
`;

export const Table = styled.div`
  font-size: 14px;
  color: ${(props) => props.color};
  padding: 10px;
  td {
    padding: 8px 15px;
    border-bottom: ${(props) => props.borderLight ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.3)'};
  }
`;

export const TextColour1 = styled.td`
  color: ${(props) => props.color}
`;
export const TextColour2 = styled.td`
  color: ${(props) => props.color}
`;
export const TextColour3 = styled.td`
  color: ${(props) => props.color}
`;

export const Alert = styled.div`
  opacity: ${(props) => props.show ? '1' : '0'};
  position: absolute;
  bottom: 0px;
  width: 100vw;
  text-align: center;
  padding: 15px 30px;
  margin: 0 auto;
  background-color: #333333;
  color: #FFFFFF;
  z-index: 2;
  transition: 0.7s ease;
`;