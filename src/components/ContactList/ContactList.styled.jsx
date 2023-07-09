import styled from 'styled-components';

export const Stats = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid orangered;
  background-color: #262626;
`;

export const StatsItem = styled.li`
  background-color: #2F4F4F;
  position: relative;
  padding: 10px 0px;
  margin-bottom: 10px;
`;

export const Item = styled.span`
  font-size: 20px;
  font-weight: 700;
  padding: 5px;
  margin-right: 10px;
  background-color: #1E90FF;
  border-radius: 5px;
  border: 1px solid white;
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-weight: 700;
  font-size: 20px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid orangered;
  cursor: pointer;
  color: orangered;
  background-color: #262626;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: orangered;
    color: white;
  }
`;