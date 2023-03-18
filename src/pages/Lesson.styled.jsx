import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackBtn = styled.button`
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

export const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MainTitele = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 50px;
  }
`;

export const SpeedInfo = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 14px;
`;
export const LessonsList = styled.ul`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: center;
  }
   

`
export const LessonItem = styled.li`
  margin-bottom: 10px;

  width: 300px;
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),
    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);

  cursor: pointer;
`;

export const ImgThumb = styled.div`
  height: 220px;
  margin-bottom: 10px;
  position: relative;
`;

export const NoImg = styled.img`
  width: 300px;
  height: 155px;
  object-fit: contain;
`;

export const Img = styled.img`
  position: absolute;
  z-index: 100;
  top: 0;
  width: 300px;
  object-fit: contain;
`;

export const WatchBtn = styled.div`
  padding: 5px;
  margin-bottom: 10px;
  width: 150px;
  text-align: center;

  background-color: lightblue;
  border: 1px solid lightblue;

  font-size: 18px;

  &:hover,
  &:focus-visible {
    background-color: #1d89ae;
    border: 1px solid #1d89ae;
    color: white;
  }
`;

export const LockedBtn = styled.div`
  padding: 5px;
  margin-bottom: 10px;
  width: 150px;
  text-align: center;

  background-color: #1d89ae;
  border: 1px solid #1d89ae;

  font-size: 18px;
`;
