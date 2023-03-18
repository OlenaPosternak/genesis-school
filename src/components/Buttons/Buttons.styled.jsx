import styled from 'styled-components';
export const ButtonsSection = styled.div`
  display: flex;

  gap: 10px;
  justify-content: center;

  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  outline: none;
  background-color: lightblue;
  border: 1px solid lightblue;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  font-size: 20px;

  &:hover,
  &:focus-visible {
    background-color: #1d89ae;
    border: 1px solid #1d89ae;
    color: white;
  }
`;
