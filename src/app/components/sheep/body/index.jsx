import styled from 'styled-components';

const WoolBush = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 25px;
  position: absolute;
`;

const WoolBushShadow = styled(WoolBush)`
  background: #eee;
  z-index: -1;
`;

const Body = styled.div`
  width: 200px;
  height: 120px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 35px;
  z-index: 1;

  ${WoolBush} {
    &:nth-of-type(1) {
      top: -10px;
      left: 50px;
    }

    &:nth-of-type(2) {
      top: -10px;
      left: 80px;
    }

    &:nth-of-type(3) {
      top: -10px;
      left: 100px;
    }

    &:nth-of-type(4) {
      top: 0px;
      left: 130px;
    }

    &:nth-of-type(5) {
      top: 20px;
      left: 155px;
    }

    &:nth-of-type(6) {
      top: 40px;
      left: 160px;
    }

    &:nth-of-type(7) {
      top: 45px;
      left: 163px;
    }

    &:nth-of-type(8) {
      top: 65px;
      left: 140px;
    }

    &:nth-of-type(9) {
      top: 70px;
      left: 143px;
    }

    &:nth-of-type(10) {
      top: 80px;
      left: 110px;
    }

    &:nth-of-type(11) {
      top: 85px;
      left: 112px;
    }

    &:nth-of-type(12) {
      top: 80px;
      left: 75px;
    }

    &:nth-of-type(13) {
      top: 85px;
      left: 75px;
    }

    &:nth-of-type(14) {
      top: 75px;
      left: 40px;
    }

    &:nth-of-type(15) {
      top: 80px;
      left: 40px;
    }

    &:nth-of-type(16) {
      top: 65px;
      left: 10px;
    }

    &:nth-of-type(17) {
      top: 70px;
      left: 11px;
    }

    &:nth-of-type(18) {
      top: 45px;
      left: -5px;
    }

    &:nth-of-type(19) {
      top: 25px;
      left: -6px;
    }

    &:nth-of-type(20) {
      top: 0px;
      left: 15px;
    }
  }
`;

const SheepBody = () => {
  return (
    <Body>
      <WoolBush />
      <WoolBush />
      <WoolBush />
      <WoolBush />
      <WoolBush />
      <WoolBush />
      <WoolBushShadow />
      <WoolBush />
      <WoolBushShadow />
      <WoolBush />
      <WoolBushShadow />
      <WoolBush />
      <WoolBushShadow />
      <WoolBush />
      <WoolBushShadow />
      <WoolBush />
      <WoolBushShadow />
      <WoolBush />
      <WoolBush />
      <WoolBush />
    </Body>
  );
};

export default SheepBody;
