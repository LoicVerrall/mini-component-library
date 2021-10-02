import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const ComponentWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
`;

const PresentationalContent = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  border-radius: 8px;

  ${SelectWrapper}&:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-wring-color;
  }

  ${SelectWrapper}&:hover + & {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <ComponentWrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <PresentationalContent>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalContent>
    </ComponentWrapper>
  );
};

export default Select;
