import styled from 'styled-components';

const Legs = styled.div`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const Leg = styled.div`
  width: 14px;
  height: 40px;
  background: black;
  border-radius: 5px;
  transform-origin: top left;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

const FrontLeg = styled(Leg)`
  transform: rotate(10deg);
  animation-name: sheep-walk-leg-front;
`;

const BackLeg = styled(Leg)`
  transform: rotate(-10deg);
  animation-name: sheep-walk-leg-back;
  opacity: 0.7;
`;

const SheepLegs = () => {
  return (
    <Legs>
      <FrontLeg />
      <BackLeg />
      <FrontLeg />
      <BackLeg />
    </Legs>
  );
};

export default SheepLegs;
