import styled from "styled-components";

export const HomeSectionComponent = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
`;

export const Message = styled.div`
  justify-self: center;
  align-self: center;
  h1 {
    font-size: clamp(3rem, 10vw, 4rem);
    line-height: 110%;
    letter-spacing: -5px;
    text-align: center;
    color: #db4a49;
  }
`;

export const Image = styled.div`
  width: 300px;
  height: 250px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  justify-self: center;
`;
