import styled from 'styled-components';
import { setAnimation } from '../../theme/styles/helpers';
import SheepBody from './body';
import SheepFace from './face';
import SheepLegs from './legs';

function createSheepWalkingAnimation(time) {
  return setAnimation(`sheep-walking linear ${time}s infinite`);
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 60px;
  width: 250px;
  height: 180px;
  ${createSheepWalkingAnimation(13)}

  @media(${({ theme: { breakpoints } }) => breakpoints.sm}) {
    ${createSheepWalkingAnimation(16)}
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.md}) {
    ${createSheepWalkingAnimation(19)}
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    ${createSheepWalkingAnimation(22)}
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    ${createSheepWalkingAnimation(25)}
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xxl}) {
    ${createSheepWalkingAnimation(28)}
  }
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
