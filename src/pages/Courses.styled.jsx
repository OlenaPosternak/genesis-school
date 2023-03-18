import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const AllItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  min-height: 500px;

  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),
    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const LinkItem = styled(Link)`
  color: #212121;
`;

export const Title = styled.span`
  font-weight: 500;
`;

export const ImageThumb = styled.div`
  width: 300px;
  height: 130px;
  display: flex;
  align-items: flex-end;
`;

export const Image = styled.img`
  width: 300px;
  height: 130px;
  object-fit: cover;
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 5px;
`;
