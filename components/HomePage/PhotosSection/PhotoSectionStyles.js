import styled from "styled-components";

export const PhotosSectionComponent = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 900px;
  margin: auto;
  display: grid;
  align-content: start;
  padding: 10vw 0;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  grid-auto-rows: 250px;
`;

export const Photo = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  grid-row: auto / span 2;

  &:nth-child(1) {
    grid-column: 1/-1;
  }
  &:nth-child(2) {
    grid-column: 1/3;
  }
  &:nth-child(3),
  &:nth-child(4) {
    grid-column: 3 / -1;
    grid-row: auto / span 1;
  }
  &:nth-child(4) {
    grid-column: 3 / -1;
    grid-row: auto / span 1;
    background-position: center top;
  }
  &:nth-child(5) {
    grid-column: 1/4;
    background-position: center -100px;
  }
  &:nth-child(7) {
    grid-column: 1/3;
  }
  &:nth-child(8) {
    grid-column: 3/-1;
    background-position: 65% center;
  }
  &:nth-child(9) {
    grid-column: 1/-1;
    grid-row: auto / span 2;
    background-position: center center;
  }
  &:nth-child(10) {
    grid-column: 1/3;
    grid-row: auto / span 1;
  }
  &:nth-child(11) {
    grid-column: 3/-1;
  }
  &:nth-child(12) {
    grid-column: 1/3;
    grid-row: auto / span 1;
  }
  &:nth-child(13) {
    grid-column: 1/-1;
    grid-row: auto / span 2;
  }
`;
