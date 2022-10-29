import styled from 'styled-components';
import Stars from './Stars';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 10, 121, 0.91) 58%, rgba(0, 212, 255, 1) 100%);
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
