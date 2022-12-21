import styled from 'styled-components';

export const ListContact = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Button = styled.button`
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.05);
    border: 1px outset rgba(235, 137, 255, 0.71);
  }
`;
