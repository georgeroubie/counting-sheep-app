import styled from 'styled-components';
import SheepHeadWool from './Wool';

const Face = styled.div`
  width: 70px;
  height: 90px;
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 2;

  &:before,
  &:after {
    content: '';
    width: 70px;
    height: 90px;
    border-radius: 70px/90px;
    position: absolute;
  }

  &:before {
    top: 0;
    left: 0;
    background: #fff;
    z-index: 1;
  }

  &:after {
    top: 0;
    left: 5px;
    background: #eee;
    z-index: 0;
  }
`;

const Eye = styled.div`
  width: 11px;
  height: 17px;
  background: black;
  border-radius: 7.5px/11.5px;
  position: absolute;
  z-index: 2;

  &:before {
    content: '';
    display: inline-block;
    background: white;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    animation: sheep-moving-eyes linear 10s infinite;
  }
`;

const LeftEye = styled(Eye)`
  top: 23px;
  left: 17px;
`;

const RightEye = styled(Eye)`
  top: 23px;
  left: 38px;
`;

const Ear = styled.div`
  background: black;
  border-radius: 50%;
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: pink;
  }
`;

const LeftEar = styled(Ear)`
  left: -13px;
`;

const RightEar = styled(Ear)`
  left: 55px;
`;

const SheepFace = () => {
  return (
    <Face>
      <SheepHeadWool />
      <LeftEye />
      <RightEye />
      <LeftEar />
      <RightEar />
    </Face>
  );
};

export default SheepFace;
