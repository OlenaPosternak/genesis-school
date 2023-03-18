import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: 360px) {
    width: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
  }
  a {
    text-decoration: none;
  }
`;
