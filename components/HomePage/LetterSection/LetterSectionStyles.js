import styled from "styled-components";

export const LetterSectionComponent = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 900px;
  margin: auto;
  display: grid;
  align-content: start;
  padding: 10vw 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: center;
`;

export const Letter = styled.div`
  max-width: 400px;
  p {
    font-size: 1.1rem;
    margin-bottom: 10px;
    &:first-of-type::first-letter {
      font-size: 2rem;
    }
  }
`;

export const Photo = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Video = styled.div`
  grid-column: 1/-1;
  width: 100%;

  iframe {
    width: 100%;
  }
`;
