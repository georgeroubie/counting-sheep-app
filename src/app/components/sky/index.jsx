import styled from 'styled-components';
import Stars from './Stars';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Moon = styled.div`
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

const Sky = () => {
  return (
    <Wrapper>
      <Moon />
      <Stars />
    </Wrapper>
  );
};

export default Sky;