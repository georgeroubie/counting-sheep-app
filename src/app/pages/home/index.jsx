import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _AddIcon from '../../components/icons/Add';
import _InfoIcon from '../../components/icons/Info';
import _ResetIcon from '../../components/icons/Reset';
import Sheep from '../../components/sheep';
import Sky from '../../components/sky';
import useOnViewport from '../../hooks/useOnViewport';

const Grass = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(45, 208, 31, 1) 0%, rgba(18, 152, 14, 0.83) 100%);
  height: ${({ theme: { sizes } }) => sizes.grassHeight};
`;

const Number = styled.span`
  cursor: default;
  display: inline-block;
  pointer-events: none;
  position: absolute;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  top: ${({ theme: { spacing } }) => spacing.large};
  left: ${({ theme: { spacing } }) => spacing.large};
`;

const IconWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

const InfoIcon = styled(_InfoIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
`;

const ResetIcon = styled(_ResetIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
`;

const AddIcon = styled(_AddIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
`;

const Home = () => {
  const navigate = useNavigate();
  const sheepRef = useRef(null);
  const [isSheepIntersecting] = useOnViewport(sheepRef);
  const [isAddSheepEnabled, setIsAddSheepEnabled] = useState(false);
  const [numberOfSheep, setNumberOfSheep] = useState(0);

  useEffect(() => {
    if (isSheepIntersecting) {
      setIsAddSheepEnabled(true);
    }
  }, [isSheepIntersecting]);

  function refreshPage() {
    window.location.reload();
  }

  const addOneSheep = useCallback(() => {
    if (isAddSheepEnabled) {
      setNumberOfSheep((prevNumberOfSheep) => prevNumberOfSheep + 1);
      setIsAddSheepEnabled(false);
    }
  }, [isAddSheepEnabled]);

  function goToAboutPage() {
    navigate('/about');
  }

  return (
    <>
      <Sky />
      {numberOfSheep > 0 && <Number>{numberOfSheep}</Number>}
      <Sheep ref={sheepRef} />
      <Grass>
        <IconWrapper onClick={addOneSheep}>
          <AddIcon />
        </IconWrapper>
        <IconWrapper onClick={refreshPage}>
          <ResetIcon />
        </IconWrapper>
        <IconWrapper onClick={goToAboutPage}>
          <InfoIcon />
        </IconWrapper>
      </Grass>
    </>
  );
};

export default Home;
