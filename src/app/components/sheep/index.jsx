import { forwardRef } from 'react';
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
  bottom: ${({ theme: { sizes } }) => sizes.grassHeight};
  width: 250px;
  height: 180px;
  ${createSheepWalkingAnimation(7)}

  @media(${({ theme: { breakpoints } }) => breakpoints.sm}) {
    ${createSheepWalkingAnimation(8)}
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.md}) {
    ${createSheepWalkingAnimation(9)}
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    ${createSheepWalkingAnimation(10)}
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    ${createSheepWalkingAnimation(11)}
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xxl}) {
    ${createSheepWalkingAnimation(12)}
  }
`;

const Sheep = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <SheepFace />
      <SheepBody />
      <SheepLegs />
    </Wrapper>
  );
});

Sheep.displayName = 'Sheep';

export default Sheep;
