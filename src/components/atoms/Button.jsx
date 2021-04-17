import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: var(--color-${(props) => props.type});
`;

export default function Button({ type = 'default', onClick, children }) {
  return (
    <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
  );
}

Button.propTypes = {
  type: propTypes.oneOf('default', 'primary', 'secondary'),
  onClick: propTypes.func,
  children: propTypes.node,
};
