import styled from 'styled-components';
import { setAnimation } from '../../theme/styles/helpers';
import SheepBody from './body';
import SheepFace from './face';
import SheepLegs from './legs';

const Wrapper = styled.div`
  position: absolute;
  bottom: 60px;
  width: 250px;
  height: 180px;
  ${setAnimation('sheep-walking cubic-bezier(0, 0.39, 1, 1) 10s infinite')}
`;

const Sheep = () => {
  return (
    <Wrapper>
      <SheepFace />
      <SheepBody />
      <SheepLegs />
    </Wrapper>
  );
};

export default Sheep;
