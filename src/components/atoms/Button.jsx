import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: var(--color-${props => props.type});
`;

export function Button({ type = 'default', onClick, children }) {
  return (
    <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
  );
}
