import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgb(2, 0, 36);
  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `};
`;

const ChildrenWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  height: 100%;
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

    let timeout = null;
    function resizeListener() {
      clearTimeout(timeout);
      timeout = setTimeout(() => changeHeightValue(), 100);
    }

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <Wrapper $height={height}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
