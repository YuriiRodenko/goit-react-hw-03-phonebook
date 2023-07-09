import styled from 'styled-components';

export const Form = styled.form`
  background-color: #262626;
  padding: 10px;
  border: 2px solid orangered;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 20px;
  color: orangered;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 8px;
  margin: 5px 10px 5px;
  border-radius: 5px;
  border: 1px solid orangered;
  outline-color: orangered;
  background-color: #262626;
  color: #1E90FF;
`;

export const Btn = styled.button`
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