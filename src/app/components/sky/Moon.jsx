import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 30px;
  right: 50px;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 10px 10px 0px 0px #fefcd7;
`;

const Moon = () => {
  return <Wrapper />;
};

export default Moon;
