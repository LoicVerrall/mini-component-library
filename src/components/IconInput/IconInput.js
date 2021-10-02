import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 10,
  },
  large: {
    fontSize: 18,
    iconSize: 16,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  if (!styles) throw new Error(`Unknown size passed to IconInput: ${size}`);

  return (
    <Wrapper style={{ '--explicitWidth': width + 'px' }}>
      <VisuallyHidden>{label}</VisuallyHidden>

      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
      </IconWrapper>

      <Input
        placeholder={placeholder}
        style={{
          '--fontSize': styles.fontSize + 'px',
          '--iconSize': styles.iconSize + 'px',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid black;
  width: var(--explicitWidth);
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`;

const Input = styled.input`
  border: none;
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  width: calc(100% - var(--iconSize));
  margin-left: calc(var(--iconSize) + 12px);
  font-weight: bold;

  ${Wrapper}:hover & {
    color: black;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`;

export default IconInput;
