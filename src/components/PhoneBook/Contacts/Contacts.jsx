import React from 'react';
import { StyledList, StyledItem, StyledIconSpan } from './Contacts.styled';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Contacts({ contacts, onClick }) {
  return (
    <StyledList>
      {contacts.map(({ name, number, id }) => {
        return (
          <StyledItem key={id}>
            {name} : {number}
            <StyledIconSpan onClick={() => onClick(id)}>
              <FaRegTrashAlt />
            </StyledIconSpan>
          </StyledItem>
        );
      })}
    </StyledList>
  );
}
