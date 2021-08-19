/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const WrapperBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray15};
  border-radius: 8px;
  overflow: hidden;
  padding: ${props => props.withPadding ? '4px' : '0' };
`;

const Trimmer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--percentageValue);
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  let height;
  switch (size) {
    case 'small':
      height = 8;
      break;

    default:
    case 'medium':
      height = 12;
      break;

    case 'large':
      height = 24;
      break;
  }

  return (
    <WrapperBar
      withPadding={size === 'large'}
      style={{
        '--height': height + 'px'
      }}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuetext={`${value}%`}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Trimmer>
        <InnerBar
          style={{
            '--percentageValue': value + '%'
          }}
        />
      </Trimmer>
    </WrapperBar>
  );
};

export default ProgressBar;
