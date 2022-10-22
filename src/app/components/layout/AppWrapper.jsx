import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Sky from '../sky';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgb(2, 0, 36);
  background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 10, 121, 0.91) 58%, rgba(0, 212, 255, 1) 100%);
  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `};
`;

const ChildrenWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

function getHeight() {
  return `${window.innerHeight}px`;
}

const AppWrapper = ({ children }) => {
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    function changeHeightValue() {
      setHeight(getHeight());
    }

    window.addEventListener('resize', changeHeightValue);

    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, []);

  return (
    <Wrapper $height={height}>
      <Sky />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
