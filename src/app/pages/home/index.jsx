import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _AddIcon from '../../components/icons/Add';
import _InfoIcon from '../../components/icons/Info';
import _ResetIcon from '../../components/icons/Reset';
import Sheep from '../../components/sheep';
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
  font-size: ${({ theme: { fontSize } }) => fontSize.xxlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin: ${({ theme: { spacing } }) => spacing.large};
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
  const sheepEntry = useOnViewport(sheepRef, {});
  const [isAddSheepEnabled, setIsAddSheepEnabled] = useState(false);
  const [numberOfSheep, setNumberOfSheep] = useState(0);

  useEffect(() => {
    if (sheepEntry?.isIntersecting) {
      setIsAddSheepEnabled(true);
    }
  }, [sheepEntry]);

  function refreshPage() {
    window.location.reload();
  }

  function addOneSheep() {
    if (isAddSheepEnabled) {
      setNumberOfSheep((prevNumberOfSheep) => prevNumberOfSheep + 1);
      setIsAddSheepEnabled(false);
    }
  }

  function goToAboutPage() {
    navigate('/about');
  }

  return (
    <>
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
