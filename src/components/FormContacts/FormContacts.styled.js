import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const InputContact = styled.input`
  width: 300px;
  height: 25px;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #000;
  padding: 0 8px;
`;

export const Button = styled.button`
  cursor: pointer;
`;
