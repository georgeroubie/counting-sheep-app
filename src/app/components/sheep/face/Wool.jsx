import styled from 'styled-components';

const WoolBush = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  z-index: 1;
`;

const WoolBushShadow = styled(WoolBush)`
  width: 21px;
  height: 21px;
  background: #eee;
  z-index: 0;
`;

const Wool = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 70px;
  height: 90px;
  display: flex;

  ${WoolBush} {
    &:nth-of-type(1) {
      top: -5px;
      left: 10px;
    }

    &:nth-of-type(2) {
      width: 25px;
      height: 25px;
      top: -10px;
      left: 20px;
    }

    &:nth-of-type(3) {
      top: -6px;
      left: 38px;
    }

    &:nth-of-type(4) {
      top: -5px;
      left: 10px;
    }

    &:nth-of-type(5) {
      width: 26px;
      height: 26px;
      top: -10px;
      left: 20px;
    }

    &:nth-of-type(6) {
      top: -6px;
      left: 38px;
    }
  }
`;

const SheepHeadWool = () => {
  return (
    <Wool>
      <WoolBush />
      <WoolBush />
      <WoolBush />
      <WoolBushShadow />
      <WoolBushShadow />
      <WoolBushShadow />
    </Wool>
  );
};

export default SheepHeadWool;
